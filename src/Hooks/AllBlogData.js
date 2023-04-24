import { useState } from "react";
import firstBlog from "../assets/img/blog/firstBlog.jpg";

const AllBlogData = () => {
  const blogsData = [
    {
      id: 1,
      img: firstBlog,
      title: "Starting point",
      commentor: "NazarovAsadbek",
      date: "24 April 2023",
      tag: `life`,
      description1: "",
      description2: "",
      description3: "",
      description4: "",
    },
  ];

  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleBlogsData = (id) => {
    const find = blogsData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  return {
    singleData,
    isOpen,
    setIsOpen,
    blogsData,
    handleBlogsData,
  };
};

export default AllBlogData;
