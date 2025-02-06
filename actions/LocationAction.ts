"use server";

import { LocationModel } from "@/models/Location";
import mongoose from "mongoose";

export async function saveLocationAction(location: { latitude?: number; longitude?: number; email?: string }) {
    try {
        console.log("Saving location:", location);

        const now = new Date();
        const bangkokOffset = 7 * 60 * 60 * 1000; // UTC+7 in milliseconds
        const bangkokTime = new Date(now.getTime() + bangkokOffset);

        console.log("Bangkok Time (Adjusted):", bangkokTime);

        // Ensure MongoDB connection only once
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(process.env.MONGO_URI as string);
        }

        // Save location
        const newLocation = new LocationModel({
            email: location.email || "unknown",
            latitude: location.latitude ?? null,
            longitude: location.longitude ?? null,
            createdAt: bangkokTime,
        });

        await newLocation.save();

        console.log("Location saved successfully!");
        return { success: true, message: "Location saved successfully" };
    } catch (error) {
        console.error("Error saving location:", error);
        return { success: false, message: "Error saving location", error };
    }
}
