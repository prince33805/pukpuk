import { Schema, Document, model, models } from "mongoose";

export interface ILocation extends Document {
    email?: string;
    latitude?: number | null; // ✅ Allow null
    longitude?: number | null; // ✅ Allow null
    createdAt: Date;
}

const LocationSchema = new Schema<ILocation>({
    email: { type: String, required: false },
    latitude: { type: Number, required: false, default: null }, // ✅ No longer required
    longitude: { type: Number, required: false, default: null }, // ✅ No longer required
    createdAt: {
        type: Date,
        default: () => new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Bangkok" })) // Change to your time zone
    }
});

// ✅ Prevent model overwrite error
export const LocationModel = models.Location || model<ILocation>("Location", LocationSchema);
