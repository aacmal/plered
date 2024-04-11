"use client";

import { ChatBubble } from "./chat-bubble";

const DUMMY_MESSAGE = [
  {
    content: "Hi there! How can I help you today?",
    created_at: "2023-01-28T14:01:00Z",
  },
  {
    content: "I have a question about my order.",
    created_at: "2023-01-28T14:01:00Z",
  },
  {
    content: "Sure! What would you like to know?",
    created_at: "2023-01-28T14:01:00Z",
  },
  {
    content: "When will my order arrive?",
    created_at: "2023-01-28T14:01:00Z",
  },
  {
    content: "Your order will arrive in 3-5 business days.",
    created_at: "2023-01-28T14:01:00Z",
  },
  {
    content: "Thank you!",
    created_at: "2023-01-28T14:01:00Z",
  },
  {
    content:
      "You're welcome! Have a great day! \n If you have any other questions, feel free to ask 🙂🥰",
    created_at: "2023-01-28T14:01:00Z",
  },
];

export default function Chats() {
  return (
    <div className="mx-auto flex w-full flex-1 flex-col justify-end pt-10">
      <div className="flex flex-1 flex-col items-end gap-3 pb-3">
        {DUMMY_MESSAGE.map((message, index) => (
          <ChatBubble
            isCurrentUser={index % 2 === 0}
            message={message}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
