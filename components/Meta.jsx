import Head from "next/head";

const Meta = ({ title, keyword, desc }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content={desc} />
        <meta name="keyword" content={keyword} />
      </Head>
    </div>
  );
};

Meta.defaultProps = {
  title: "Astria Ingest",
  keyword:
    "digital forensics,automation,forensics tool kit,investigation,data analysis,Cyber security,crime nvestigation",
  desc: "The Most mordern simplified digital forensics investigation tools .",
};

export default Meta;
