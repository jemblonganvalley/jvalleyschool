import React from "react";

const About = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>hello</h1>
      <img src={`https://picsum.photos/seed/${data || 150}/300`} />
    </div>
  );
};

export default About;

export async function getServerSideProps(context) {
  return {
    props: {
      data: context.params.query,
    },
  };
}
