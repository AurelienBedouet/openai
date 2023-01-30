import { SiProbot } from "react-icons/si";
import { FaUser } from "react-icons/fa";

type Props = {
  user: string;
  message: string;
};

const ChatMessage = ({ user, message }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex gap-6 py-6 px-4 lg:px-0">
        <div>
          {user === "gpt" ? <SiProbot size={20} /> : <FaUser size={20} />}
        </div>
        <div>{message}</div>
      </div>
    </div>
  );
};

export default ChatMessage;
