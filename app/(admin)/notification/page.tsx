import Card from "@/components/ui/card";

import List from "./_components/list";

const DUMMY_DATA = [
  {
    id: 1,
    createdAt: new Date(),
    type: "message",
    title: "New message",
    description: "You have a new message from Ucluk Banana",
    important: true,
    read: false,
  },
  {
    id: 2,
    createdAt: new Date(),
    type: "security",
    title: "Security alert",
    description: "Your account password has been updated",
    important: false,
    read: true,
  },
  {
    id: 3,
    createdAt: new Date(),
    type: "user",
    title: "Your account has been kyc verified",
    description: "You can now deposit and withdraw funds",
    important: false,
    read: true,
  },
  {
    id: 4,
    createdAt: new Date(),
    type: "system",
    title: "Server maintenance",
    description: "We will be performing server maintenance on 12th June",
    important: false,
    read: true,
  },
  {
    id: 4,
    createdAt: new Date(),
    type: "system",
    title: "Server maintenance",
    description: "We will be performing server maintenance on 12th June",
    important: false,
    read: true,
  },
  {
    id: 4,
    createdAt: new Date(),
    type: "system",
    title: "Server maintenance",
    description: "We will be performing server maintenance on 12th June",
    important: false,
    read: true,
  },
  {
    id: 4,
    createdAt: new Date(),
    type: "system",
    title: "Server maintenance",
    description: "We will be performing server maintenance on 12th June",
    important: false,
    read: true,
  },
  {
    id: 4,
    createdAt: new Date(),
    type: "system",
    title: "Server maintenance",
    description: "We will be performing server maintenance on 12th June",
    important: false,
    read: true,
  },
  {
    id: 4,
    createdAt: new Date(),
    type: "system",
    title: "Server maintenance",
    description: "We will be performing server maintenance on 12th June",
    important: false,
    read: true,
  },
  {
    id: 4,
    createdAt: new Date(),
    type: "system",
    title: "Server maintenance",
    description: "We will be performing server maintenance on 12th June",
    important: false,
    read: true,
  },
  {
    id: 4,
    createdAt: new Date(),
    type: "system",
    title: "Server maintenance",
    description: "We will be performing server maintenance on 12th June",
    important: false,
    read: true,
  },
  {
    id: 4,
    createdAt: new Date(),
    type: "system",
    title: "Server maintenance",
    description: "We will be performing server maintenance on 12th June",
    important: false,
    read: true,
  },
  {
    id: 4,
    createdAt: new Date(),
    type: "system",
    title: "Server maintenance",
    description: "We will be performing server maintenance on 12th June",
    important: false,
    read: true,
  },
  {
    id: 4,
    createdAt: new Date(),
    type: "system",
    title: "Server maintenance",
    description: "We will be performing server maintenance on 12th June",
    important: false,
    read: true,
  },
];

interface Props {
  searchParams: {
    category: string;
  };
}
export default function AllNotificationPage(props: Props) {
  const { category } = props.searchParams;

  const filteredData = DUMMY_DATA.filter((notification) => {
    if (category === "unread") {
      return !notification.read;
    }
    if (category === "read") {
      return notification.read;
    }
    if (category === "important") {
      return notification.important;
    }
    return true;
  });

  return (
    <Card className="h-fit flex-1">
      <ul>
        {filteredData.map((notification) => (
          <List
            key={notification.id}
            type={notification.type as any}
            createdAt={notification.createdAt}
            title={notification.title}
            description={notification.description}
            read={notification.read}
          />
        ))}
      </ul>
    </Card>
  );
}
