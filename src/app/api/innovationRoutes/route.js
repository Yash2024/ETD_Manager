// import { NextResponse } from "next/server";
// import users from "@/app/models/user";
// import Innovation from "@/app/models/innovation";
// import dbConnect from "@/app/utils/dbConnect";
// import mongoose from "mongoose";

// dbConnect();

// export async function GET(req){
//     let inns = await Innovation.find();

//     return NextResponse.json(inns);
// }

// export async function POST(req){

//     const body = await req.json();
//     // console.log(body);

//     let newinn = new Announcement({
//         _id: new mongoose.Types.ObjectId(),
//         Title: body.Title,
//         Faculty: body.Faculty,
//         Description: body.Description,
//         Criteria: body.Criteria
//     })
//     // await newuser.save();
//     await Innovation.create(newinn);
//     return NextResponse.json({
//         message: 'Innovation saved'
//     });
    
// }

import { NextResponse } from "next/server";
import Innovation from "../../../../comp/models/innovation";
import dbConnect from "@/app/utils/dbConnect";
import mongoose from "mongoose";
import formidable from "formidable";

import http from 'http';

dbConnect();

export async function POST(req) {
  try {
    // Parse form data
    const form = new formidable.IncomingForm();

    // Set the upload directory for files
    form.uploadDir = './public/uploads';

    // Parse the request
    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        else resolve([fields, files]);
      });
    });

    // Create a new innovation object with form data
    let newInnovation = new Innovation({
      _id: new mongoose.Types.ObjectId(),
      Title: fields.Title,
      Faculty: fields.Faculty,
      Description: fields.Description,
      Criteria: fields.Criteria,
      Image: files.Image,
      Document: files.Document,
    });

    // Save the innovation to the database
    await newInnovation.save();

    // Respond with a success message
    const res = new http.ServerResponse(req);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Innovation saved' }));
  } catch (error) {
    // Respond with an error message
    const res = new http.ServerResponse(req);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: error.message }));
  }
}

