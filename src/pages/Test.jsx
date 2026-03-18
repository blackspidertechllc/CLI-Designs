import CassieHeadshot from "@/assets/images/CassieHeadShot.webp";

export default function Test() {
  return (
    <div className="container flex gap-10 justify-between">
      <div className="test-left text-left">
        <div className="p-8 text-left">
          <h1 className="about-title text-5xl mb-4">Our Team</h1>
          <p className="about-text">
            Cassiana is a Trinbagonian based Interior Designer with over 10
            years expereince in the field both locally and internationally. She
            passionately believes that our surroundings have a deep impact on
            the soul. So she has made her life cause to create beautiful places
            for people to live in. She is a lover of change. What drives her to
            design is her constant desire to explore new trends and old trends
            in a new way.
          </p>
          <h2 className="about-subtitle text-4xl my-10">Our Services</h2>
          <h3 className="about-services-sub text-3xl my-3">
            Residential & Commercial Interiors
          </h3>
          <p className="about-text">
            We help make spaces functional, safe, and beautifyl by determining
            space requirements and selecting decorative items, such as colors,
            lighting, and materials.
          </p>
          <h3 className="about-services-sub text-3xl my-3">Concept Development</h3>
          <p className="about-text">
            With the use of techincal drawings and putting together mood boards
            with key images that best convey the essence of the brand, style and
            overall desired look.
          </p>
          <h3 className="about-services-sub text-3xl my-3">
            Furniture, Finishes & Accessory selections
          </h3>
          <p className="about-text">
            We use careful selection and arrangement of accessories to transform
            an empty room or space into a finished space with a personality all
            of its own
          </p>
        </div>
      </div>
      <div className="test-right my-8">
        <div className="">
          <img
            className="cassie-headshot"
            src={CassieHeadshot}
            alt="Cassie's Headshot"
            style={{ width: "auto", height: "auto", maxwidth: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}
