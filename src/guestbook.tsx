import React, { useEffect, useState } from "react";
import { Avatar, Button, List } from "antd";
import axios from "axios";
import result from "antd/lib/result";

type GuestbookItem = {
  key: number;
  title: string;
  content: string;
  username: string;
};



export const Guestbook = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<GuestbookItem[]>([]);

  const fetchGuestbookItems = async () => {
    const {data} = await axios.get('https://backend-arf0.onrender.com');
    //console.log("results", results);
    const results = data;
    const items: GuestbookItem[] = [];
    for(let i=0; i< results.length; i++){
        items.push({
            key: results[i].id,
            title: results[i].title,
            content: results[i].content,
            username: results[i].name,
        })
    }

    /*results.forEach((result : any) => {
        return {
            key: result.id,
            title: result.title,
            content: result.content,
            username: result.name,
        };

    });*/

    setData(items);
  };

  return (
    <>
      {" "}
      <List
        loading={loading}
        itemLayout="horizontal"
        dataSource={data}
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
        onClick={async () => {
          setLoading(true);
          //TODO: 이따가 하자
          await fetchGuestbookItems();
          setLoading(false);
        }}
      >
        수동 새로고침
      </Button>
    </>
  );
};

export default Guestbook; //이게 있으면 App.tsx에서 import Guestbook from "./guestbook"; 로 임포트가 가능 없으면 import { Guestbook } from "./guestbook";로 해줘야함
