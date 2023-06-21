import React from "react";
import s from "./Blog.module.css";

const Blog = () => {
  // const styles = {
  //   heading: { fontSize: "36px", textAlign: "center", color: "#2313ef" },
  //   text: {
  //     fontWeight: "600",
  //     textAlign: "center",
  //     lineHeight: "1.4",
  //     color: "#01f10e",
  //   },
  // };

  return (
    <div>
      <h1 className={s.title}>Blog</h1>
      <p className={s.paragraph}>
        This is an example of a React component with inline styles.
      </p>
    </div>
  );
};

export default Blog;
