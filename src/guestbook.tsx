import React, { useEffect, useState } from "react";
import { Avatar, Button, List } from "antd";

type GuestbookItem = {
  key: number;
  title: string;
  content: string;
  username: string;
};

const sample: GuestbookItem[] = [
  {
    key: 1,
    title: "안녕하세요",
    content: "첫번째 글",
    username: "이승후",
  },
  {
    key: 2,
    title: "잘가세요",
    content: "두번째 글",
    username: "승후",
  },
];

export const Guestbook = () => {
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <>
      {" "}
      <List
        loading={loading}
        itemLayout="horizontal"
        dataSource={sample}
        renderItem={(item) => (
          <List.Item style={{ background: "#fff" }}>
            <List.Item.Meta
              avatar={
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Avatar
                    src="https://joeschmoe.io/api/v1/random"
                    alt={item.username}
                  />
                  <>{item.username}</>
                </div>
              }
              title={item.title}
              description={item.content}
            />
          </List.Item>
        )}
      />
      <Button
        onClick={() => {
          setLoading(true);
          //TODO: 이따가 하자
          setLoading(false);
        }}
      >
        수동 새로고침
      </Button>
    </>
  );
};

export default Guestbook; //이게 있으면 App.tsx에서 import Guestbook from "./guestbook"; 로 임포트가 가능 없으면 import { Guestbook } from "./guestbook";로 해줘야함
