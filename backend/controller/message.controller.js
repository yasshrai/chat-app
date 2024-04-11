import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.message.push(newMessage._id);
    }
    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(201).json({ newMessage });
  } catch (error) {
    console.log("error in sendmessage controller:", error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: userTochatId } = req.params;
    const senderId = req.user._id;
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userTochatId] },
    }).populate("message");

    if (!conversation) {
      return res.status(200).json([]);
    }
    res.status(200).json(conversation.message);
  } catch (error) {
    console.log(error.message);

    res.status(500).json({ error: error.message });
  }
};
