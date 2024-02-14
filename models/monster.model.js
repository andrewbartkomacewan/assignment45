import mongoose from "mongoose";

const MonsterSchema = new mongoose.Schema(
    {
        id : {type: Number },
        name: { type: String, required: true },
        username: { type: String, required: true },
        email: { type: String, required: true },
        address: { type: Object,
            street: {type: String },
            suite:  {type: String },
            city:   {type: String },
            zipcode:{type: String },
            geo: { type: Object,
                lat: {type: String},
                lng: {type: String}
            }
        },
        phone: {type: String},
        website: {type: String},
        company: { type: Object,
            name: {type: String},
            catchPhrase: {type: String},
            bs: {type: String}
        },
        image_url: {type: String}
    },
    { timestamps: true, strictQuery: true }
);

const Monster = mongoose.model("Monster", MonsterSchema);

export default Monster;