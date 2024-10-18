import React from "react";
import styles from "./support.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Col, Row } from "react-bootstrap";

const SupportSection = () => {
  return (
    <section className={styles.SupportSection}>
      <CustomContainer variant={1}>
        <div className={styles.wrap}>
        <Row>
          <Col xs={12} md={6}>
            <div className={styles.cont} data-aos="fade-right">
              <div>
                <h2>To support students aspiring to become ​entrepreneurs, </h2>
                <p>
                  SIAWED can offer a range of activities that provide hands-on
                  experience, real-​world exposure, and valuable mentorship.
                  Here are some ideas:
                </p>
              </div>

              <p>1. Entrepreneurship Internships</p>
              <ul>
                <li>
                  <p></p>Partner with local businesses and startups to offer
                  internships focused on ​entrepreneurship. Students can work
                  directly with entrepreneurs, gaining ​insights into business
                  operations, marketing, product development, and ​more.
                </li>
              </ul>

              <p>2. Startup Incubation Programs</p>

              <ul>
                <li>
                  <p>
                    {" "}
                    Create an incubation program within colleges where students
                    can pitch ​their business ideas and receive support to
                    develop them. Provide access to ​resources, mentorship, and
                    funding opportunities.
                  </p>
                </li>
              </ul>

              <p>3. Factory and Business Site Visits</p>

              <ul>
                <li>
                  <p>
                    Organize visits to factories, production units, and
                    successful businesses to ​give students a behind-the-scenes
                    look at how businesses operate. This can ​include
                    discussions with business owners about their entrepreneurial
                    ​journeys.
                  </p>
                </li>
              </ul>

              <p>4. Entrepreneurship Bootcamps</p>

              <ul>
                <li>
                  <p>
                    Host intensive bootcamps where students can learn the basics
                    of starting ​and running a business. Topics could include
                    ideation, business planning, ​financial management, and
                    marketing strategies.
                  </p>
                </li>
              </ul>

              <p>5. Mentorship Programs</p>

              <ul>
                <li>
                  <p>
                    Establish a mentorship program where successful
                    entrepreneurs from ​SIAWED regularly visit colleges to
                    provide guidance, share experiences, and ​offer advice to
                    aspiring entrepreneurs. Pair students with mentors for
                    one-​on-one support.
                  </p>
                </li>
              </ul>
            </div>
          </Col>

          <Col xs={12} md={6}>
            <div className={styles.cont} data-aos="fade-left">
              <p>6. Business Plan Competitions</p>

              <ul>
                <li>
                  <p>
                    Organize competitions where students can develop and present
                    business plans. Provide ​feedback from a panel of experts,
                    with winners receiving seed funding, mentorship, or
                    ​incubation support.
                  </p>
                </li>
              </ul>

              <p>7. Workshops and Seminars</p>

              <ul>
                <li>
                  <p>
                    Offer workshops on specific entrepreneurial skills like
                    pitching, negotiation, digital ​marketing, and leadership.
                    Seminars could also feature guest speakers from various
                    ​industries who share their success stories and lessons
                    learned.
                  </p>
                </li>
              </ul>

              <p>8. Startup Showcases</p>

              <ul>
                <li>
                  <p>
                    Create opportunities for students to showcase their startup
                    ideas or products to potential ​investors, customers, and
                    industry experts. This could be in the form of a demo day or
                    an ​annual startup fair.
                  </p>
                </li>
              </ul>

              <p>9. Hackathons and Innovation Challenges</p>

              <ul>
                <li>
                  <p>
                    Organize hackathons where students can collaborate on
                    solving real-world problems with ​innovative solutions.
                    These events can foster creativity and teamwork, essential
                    skills for ​entrepreneurs.
                  </p>
                </li>
              </ul>

              <p>10. Entrepreneurship Clubs and Student Chapters</p>

              <ul>
                <li>
                  <p>
                    Encourage the formation of entrepreneurship clubs in
                    colleges where students can regularly ​meet, discuss ideas,
                    and work on projects. SIAWED can support these clubs with
                    resources, ​guest lectures, and networking opportunities.
                  </p>
                </li>
              </ul>

              <p>11. Peer-to-Peer Learning Networks</p>

              <ul>
                <li>
                  <p>
                    Create platforms where students can connect with peers who
                    have similar entrepreneurial ​interests. These networks can
                    be online or offline and can facilitate idea exchange,
                    ​collaboration, and mutual support.
                  </p>
                </li>
              </ul>

              <p>12. Scholarships and Grants</p>

              <ul>
                <li>
                  <p>
                    Offer scholarships or grants for students with exceptional
                    business ideas or who ​demonstrate entrepreneurial
                    potential. This financial support can help them take their
                    first ​steps in the business world.
                  </p>
                </li>
              </ul>
              
            </div>
          </Col>
        </Row>
        <p>
                These activities will not only inspire students but also equip
                them with the necessary skills, ​experience, and confidence to
                emerge as successful entrepreneurs.
              </p>
        </div>
      </CustomContainer>
    </section>
  );
};

export default SupportSection;
