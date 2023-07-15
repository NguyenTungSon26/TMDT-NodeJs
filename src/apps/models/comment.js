const mongoose = require("../../common/database")();

const commmentSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    prd_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    body: {
      type: String,
      required: true,
    },
    full_name: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);
const CommentModel = mongoose.model("Comment", commmentSchema, "comments");
module.exports = CommentModel;
