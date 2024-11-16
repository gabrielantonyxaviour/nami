import Image from "next/image";
import { Card, CardContent } from "../ui/card";

export default function XPosts() {
  const posts = [
    {
      id: 1,
      content: "Emergency!!! Bangkok Floods: 8M people affected",
      image: null,
    },
    {
      id: 2,
      content:
        "Brazil Wildfire Update: $500k Donated to the Brazil Charity Degens Foundation",
      image: null,
    },
    {
      id: 3,
      content: "Let's help the world. One village at a time.",
      image: "/tweet.jpeg",
    },
    {
      id: 4,
      content:
        "This week's top donor is gabrielaxy.eth with $1000 in donations. Keep doing the good work, Gabe. 🌟",
      image: null,
    },
  ];
  return posts.map((post, id) => (
    <Card key={id}>
      <CardContent className="p-2 w-[250px] ">
        <div className="flex justify-between">
          <div className="flex space-x-2 items-center">
            <Image
              src={"/logo.png"}
              width={30}
              height={30}
              alt="nami"
              className="rounded-full"
            />
            <p className="sen font-semibold text-sm">Nami</p>
          </div>
          <Image src={"/x.png"} width={20} height={20} alt="more" />
        </div>
        <p className="text-xs sen py-2">{post.content}</p>
        {post.image != null && (
          <Image src={post.image} width={250} height={250} alt="post" />
        )}
      </CardContent>
    </Card>
  ));
}
