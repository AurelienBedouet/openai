import express from 'express';
import openai from "../openai.client.js";

const router = express.Router();

router.route('/').get((req, res) => {
  res.status(200).json({message: 'Hello from ChatGPT!'});
});

router.route('/').post(async (req, res) => {
  try {
    const {message} = req.body;

    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${message}`,
      temperature: 0.7,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      max_tokens: 256,
    });
    res.status(200).json({result: completion.data.choices[0].text});

  } catch (error) {
    console.error(error);
    res.status(500).send(error?.response.data.error.message || 'Something went wrong');
  }
});

export default router;