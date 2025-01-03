const ErrorResponse = require("../utils/errorResponse");
const ContactMail = require("../models/ContactMails");
const mongoose = require("mongoose");
const sgMail = require("@sendgrid/mail");
const ejs = require("ejs");
sgMail.setApiKey(process.env.EMAIL_API);



const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const { Resend } = require("resend");
const path = require("path");
const OAuth2 = google.auth.OAuth2;

exports.submitResponse = async (req, res, next) => {
    console.log(req.body, "order Body")
    const id = req.body.id;
    const yourmessage = req.body.yourmessage;

    try {

        const contact = await ContactMail.findOne({ _id: mongoose.Types.ObjectId(id) });

        console.log(contact)

        if (!contact) {

        } else {
            const oauth2Client = new OAuth2(
                process.env.CLIENT_ID, // ClientID
                process.env.CLIENT_SECRET, // Client Secret
                process.env.REDIRECT_URL // Redirect URL
            );
            oauth2Client.setCredentials({
                refresh_token: process.env.REFRESH_TOKEN,
            });
            const accessToken = oauth2Client.getAccessToken();

            const currentYear = new Date().getFullYear();
            const output = `
                        <div style="margin-top: 50px;">
                            <table cellpadding="0" cellspacing="0" style="font-family: Nunito, sans-serif; font-size: 15px; font-weight: 400; max-width: 600px; border: none; margin: 0 auto; border-radius: 6px; overflow: hidden; background-color: #fff; box-shadow: 0 0 3px rgba(60, 72, 88, 0.15);">
                                <thead>
                                    <tr style="background-color: #00BF63; width: 100% ;padding: 3px 3px; line-height: 68px; text-align: center; color: #fff; font-size: 14px; font-weight: 700; letter-spacing: 1px;">
                                        <th scope="col">Message from Admin</th>
                                    </tr>
                                </thead>
    
                                <tbody>
                                    <tr>
                                        <td style="padding: 15px 24px 0; color: #8492a6;">
                                            <span>Your Message</span>
                                            <br />
                                            ${contact.message}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 15px 24px 0; color: #8492a6;">
                                            <span>Admin Response</span>
                                            <br />
                                            ${yourmessage}
                                        </td>
                                    </tr>
    
                                    <tr>
                                        <td style="padding: 15px 24px 15px; color: #8492a6;">
                                            BOT Benchmark <br> Support Team
                                        </td>
                                    </tr>
    
                                    <tr>
                                        <td style="padding: 16px 8px; color: #8492a6; background-color: #f8f9fc; text-align: center;">
                                            © ${currentYear} BOT Benchmark.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    `;


            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    type: "OAuth2",
                    user: process.env.EMAIL,
                    clientId: process.env.CLIENT_ID,
                    clientSecret: process.env.CLIENT_SECRET,
                    refreshToken: process.env.REFRESH_TOKEN,
                    accessToken: accessToken,
                },
            });
            // send mail with defined transport object
            const mailOptions = {
                from: `"${process.env.SENDER_NAME}" <${process.env.EMAIL}>`, // sender address
                to: contact.emailId, // list of receivers
                subject: "Response From BOTBenchmark ✔", // Subject line
                html: output, // html body
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log("Mail sent : %s", info.response);
                }
            });

            return res.status(200).json({
                success: true,
                message: "Email Send to your Account.",
                data: null,
            });
        }

    } catch (err) {
        return next(new ErrorResponse(err, 400));
    }
};

// exports.sendContactMail = async (req, res, next) => {
//     console.log(req.body, "order Body")
//     const userName = req.body.fullName;
//     const companyName = req.body.companyName;
//     const phoneNumber = req.body.phoneNumber;
//     const email = req.body.emailId;
//     const message = req.body.message;

//     try {

//         const contact = new ContactMail({
//             fullName : req.body.fullName, 
//             companyName : req.body.companyName, 
//             emailId : req.body.emailId, 
//             message : req.body.message, 
//             phoneNumber : req.body.phoneNumber, 
//         })

//         await contact.save();

//         if (!contact) {
//             return next(new ErrorResponse("Signup failed", 400));
//         }
//         console.log(contact, 'Contact')
//         ejs.renderFile(
//             __dirname + "/../views/email.ejs",
//             {
//                 user: contact,
//                 emailHeader: `Email from ${contact.fullName} represent's this ${contact.companyName} company`,
//                 emailMessage: `${contact.message}`,
//             },
//             function (err, data) {
//             if (err) return err;
//             else {
//                 // smtp.office365.com
//                 const transporter = nodemailer.createTransport({
//                     host: "smtp.gmail.com",
//                     port: 587,
//                     secure: false,
//                     auth: {
//                         user: "nomanmujahid.busnet@gmail.com",
//                         pass: "pvxb plmv djlh izai",
//                     },
//                     tls: {
//                         ciphers: "TLSv1",
//                     },
//                 });

//                 // send mail with defined transport object
//                 const mailOptions = {
//                     from: `"${contact.fullName}" <${contact.emailId}>`, // sender address
//                     to: 'sales@busnet.org', // list of receivers
//                     subject: `Email from Company Website`, // Subject line
//                     html: data,
//                 };

//                 transporter.sendMail(mailOptions, (error, info) => {
//                     if (error) {
//                         console.log("........error");
//                         console.log(error);
//                     } else {
//                         console.log("Mail sent : %s", info.response);
//                         // return the saved data point
//                         // return res.status(200).json(savedDataPoint);
//                         return res.status(200).json({
//                             success: true,
//                             message: "Email Send Successfully",
//                             data: contact
//                         })
//                     }
//                 });    
//             }
//             }
//         );

//     } catch (err) {
//       return next(new ErrorResponse(err, 400));
//     }
// };

exports.sendContactMail = async (req, res, next) => {
    console.log(req.body, "order Body")

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {

        const { fullName, companyName, emailId, phoneNumber, message } = req.body;

        const templatePathCompany = path.join(__dirname, '/../emails', 'MessageSendToCompany.ejs');
        const templatePathUser = path.join(__dirname, '/../emails', 'MessageSendToUser.ejs');
        const templateDataCompany = {
            username: fullName,
            companyName: companyName,
            email: emailId,
            phoneNumber: phoneNumber,
            message: message,
            logoUrl: 'https://react-email-demo-lpdmf0ryo-resend.vercel.app/static/dropbox-logo.png',
        };
        const templateDataUser = {
            username: fullName,
            logoUrl: 'https://react-email-demo-lpdmf0ryo-resend.vercel.app/static/dropbox-logo.png',
        };

        // Render the EJS templates
        const messageBodyCompany = await ejs.renderFile(templatePathCompany, templateDataCompany);
        const messageBodyUser = await ejs.renderFile(templatePathUser, templateDataUser);

        // Send email to company
        const { data: companyData, error: companyError } = await resend.emails.send({
            from: process.env.RESEND_SENDDER_EMAIL, // Your email as the sender
            to: 'sales@busnett.co.uk', // Sending to the company
            subject: 'Message from a User',
            html: messageBodyCompany,
        });

        console.log(companyData, 'companyData')
        console.log(companyError, 'companyError')

        if (companyError) {
            return res.status(400).json({
                success: false,
                message: companyError,
            });
        }

        // Send email to user
        const { data: userData, error: userError } = await resend.emails.send({
            from: process.env.RESEND_SENDDER_EMAIL, // Your email as the sender
            to: emailId, // Sending to the user
            subject: 'Message from Busnet Limited',
            html: messageBodyUser,
        });
        console.log(userData, 'userData')
        console.log(userError, 'userError')

        if (userError) {
            return res.status(400).json({
                success: false,
                message: userError,
            });
        }

        return res.status(200).json({
            success: true,
            message: "Emails sent successfully.",
            companyData,
            userData,
        });

        // const contact = await ContactMail.findOne({ _id: mongoose.Types.ObjectId(id)});

        // console.log(contact)

        // if (!contact) {

        // } else {
        //     const oauth2Client = new OAuth2(
        //         process.env.CLIENT_ID, // ClientID
        //         process.env.CLIENT_SECRET, // Client Secret
        //         process.env.REDIRECT_URL // Redirect URL
        //     );
        //     oauth2Client.setCredentials({
        //         refresh_token: process.env.REFRESH_TOKEN,
        //     });
        //     const accessToken = oauth2Client.getAccessToken();

        //     const currentYear = new Date().getFullYear();
        //     const output = `
        //                 <div style="margin-top: 50px;">
        //                     <table cellpadding="0" cellspacing="0" style="font-family: Nunito, sans-serif; font-size: 15px; font-weight: 400; max-width: 600px; border: none; margin: 0 auto; border-radius: 6px; overflow: hidden; background-color: #fff; box-shadow: 0 0 3px rgba(60, 72, 88, 0.15);">
        //                         <thead>
        //                             <tr style="background-color: #00BF63; width: 100% ;padding: 3px 3px; line-height: 68px; text-align: center; color: #fff; font-size: 14px; font-weight: 700; letter-spacing: 1px;">
        //                                 <th scope="col">Message from Admin</th>
        //                             </tr>
        //                         </thead>

        //                         <tbody>
        //                             <tr>
        //                                 <td style="padding: 15px 24px 0; color: #8492a6;">
        //                                     <span>Your Message</span>
        //                                     <br />
        //                                     ${contact.message}
        //                                 </td>
        //                             </tr>
        //                             <tr>
        //                                 <td style="padding: 15px 24px 0; color: #8492a6;">
        //                                     <span>Admin Response</span>
        //                                     <br />
        //                                     ${yourmessage}
        //                                 </td>
        //                             </tr>

        //                             <tr>
        //                                 <td style="padding: 15px 24px 15px; color: #8492a6;">
        //                                     BOT Benchmark <br> Support Team
        //                                 </td>
        //                             </tr>

        //                             <tr>
        //                                 <td style="padding: 16px 8px; color: #8492a6; background-color: #f8f9fc; text-align: center;">
        //                                     © ${currentYear} BOT Benchmark.
        //                                 </td>
        //                             </tr>
        //                         </tbody>
        //                     </table>
        //                 </div>
        //             `;


        //     const transporter = nodemailer.createTransport({
        //         service: "gmail",
        //         auth: {
        //         type: "OAuth2",
        //         user: process.env.EMAIL,
        //         clientId: process.env.CLIENT_ID,
        //         clientSecret: process.env.CLIENT_SECRET,
        //         refreshToken: process.env.REFRESH_TOKEN,
        //         accessToken: accessToken,
        //         },
        //     });
        //     // send mail with defined transport object
        //     const mailOptions = {
        //         from: `"${process.env.SENDER_NAME}" <${process.env.EMAIL}>`, // sender address
        //         to: contact.emailId, // list of receivers
        //         subject: "Response From BOTBenchmark ✔", // Subject line
        //         html: output, // html body
        //     };

        //     transporter.sendMail(mailOptions, (error, info) => {
        //         if (error) {
        //         console.log(error);
        //         } else {
        //         console.log("Mail sent : %s", info.response);
        //         }
        //     });

        //     return res.status(200).json({
        //         success: true,
        //         message: "Email Send to your Account.",
        //         data: null,
        //     });   
        // }

    } catch (err) {
        return next(new ErrorResponse(err, 400));
    }
};


exports.getAllContactMails = async (req, res, next) => {
    try {
        const mails = await ContactMail.find({})
        if (mails.length <= 0) {
            return res.status(200).json({
                success: true,
                data: [],
                message: 'No mail found'
            })
        }
        return res.status(200).json({
            success: true,
            data: mails,
            message: "Mails found"
        })
    }
    catch (err) {
        return next(new ErrorResponse(err, 400))
    }
}

exports.deleteContactMail = async (req, res, next) => {
    try {
        let deletedCount = 0
        Promise.all(req.query.IDS.map(async (element) => {

            const deletedContactMail = await ContactMail.deleteOne({ _id: mongoose.Types.ObjectId(element) })
            if (deletedContactMail.n >= 1) {
                deletedCount = deletedCount + 1
            }

        })).then(
            () => {
                if (req.query.IDS.length === deletedCount) {
                    return res.status(200).json({
                        success: true,
                        message: "Deleted Successfully",
                        data: null
                    })
                }
                else {
                    return res.status(400).json({
                        success: false,
                        data: null,
                        message: 'deletion failed'
                    })
                }

            }

        );

    }
    catch (err) {
        return next(new ErrorResponse(err, 400))
    }
}