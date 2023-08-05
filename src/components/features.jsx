// Components
import Card from "./card";

// Assets
import IconChat from "../assets/icon-chat.png";
import IconSecurity from "../assets/icon-security.png";
import IconMoney from "../assets/icon-money.png";

// Text
const text = {
  chat: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
  security:
    "We use top of the line encryption to make sure your data and money is always safe.",
  money: "The more you save with us, the higher your interest rate will be!",
};

// Title
const title = {
  chat: "You are our #1 priority",
  security: "Security you can trust",
  money: "More savings means higher rates",
};

export default function Features() {
  return (
    <div className="h-auto flex flex-col justify-around gap-7 py-10 box-border md:flex-row lg:h-[calc(100vh-553px)]">
      <Card icon={IconChat} text={text.chat} title={title.chat} />
      <Card icon={IconMoney} text={text.money} title={title.money} />
      <Card icon={IconSecurity} text={text.security} title={title.security} />
    </div>
  );
}
