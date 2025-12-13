import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import User from "./models/User.js";

dotenv.config();

async function createAdmin() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected for seeding");

    const adminEmail = "admin@codewebit.com";

    const exists = await User.findOne({ email: adminEmail });
    if (exists) {
      console.log("Admin already exists!");
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash("CodewebIT2025@!", 10);

    await User.create({
      name: "Super Admin",
      email: adminEmail,
      password: hashedPassword,
      role: "admin"
    });

    console.log("Admin created successfully:");
    console.log("Email: admin@codewebit.com");
    console.log("Password: CodewebIT2025@!");

    process.exit(0);
  } catch (error) {
    console.error("Seeding error:", error);
    process.exit(1);
  }
}

createAdmin();
