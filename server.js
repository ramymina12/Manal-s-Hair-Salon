import express from "express";
import cors from "cors";
import contactHandler from "./api/Contact/route.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.post("/api/Contact", contactHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
