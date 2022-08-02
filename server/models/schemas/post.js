import {Schema} from "mongoose"
import shortId from "./type/short-id"

const PostSchema = new Schema({
    shortId,
    title: String,
    content: String,
    // 옷장:1, OOTD:2, 당근마켓:3 
    postType: {
        type: Number,
        required: true
    },
    // url: 이미지 주소, category: [top, bottom, shoes]
    img: {
        url: {
            type: String,
            required: true
        },
        category: String
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, {
    timestamps: true
}
);

export default PostSchema;