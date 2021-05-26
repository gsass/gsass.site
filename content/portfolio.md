# Things I've Done
_What have I done?_

As of this writing, I've been working in some software capacity for just over a decade now. It amazes me both how much I've learned in this time, and also that it's somehow been this much time. In the service of chronicling my greatest hits, and ideally telling a story with them, here's a portfolio of sorts.

## 2020 - Smartsheet: APIs, observability, and on-call improvements

After participating in several major releases back-to-back, I wanted to learn how to better launch features and maintain systems at scale. To that end, I took a job with Smartsheet, a large SaaS provider for enterprise productivity software.

My team focused on tools for user-generated data intake forms, and our first project was to assume maintenance of a legacy form solution called Update Requests. I worked to characterize the front end and controller logic for this feature, which at that time had been in maintenance for a half decade. After characterizing and documenting the system, my team was able to merge in the characterization and unit tests we'd written to safeguard against any system regressions. This allowed me to then make the first significant update in five years, standardizing the default behavior of this feature with the that of the data intake forms. Finally, my team added observability tooling for Update Requests, in order to support our on-call rotation.

After addressing our concerns with Update Requests, the team split up to plan and implement a variety of features to catch us up with competitor form products. I ended up planning and scoping the addition of themes to our intake forms, accounting for development, testing, and eventual release of the product, as well as setting milestones for handoffs with relevant stakeholder teams.

## 2019 - Energysage: Marketplace modernization, and greenfield product development

In 2019, I moved back to Boston, and to Energysage. I wanted to get more practice working with the languages and technologies (Javascript, Python, SQL, AWS + infrastructural/deploy tools) I'd worked with at Warby Parker, and had experience working on marketplace products. I also liked the company size (Series B), mission (clean energy), and had a good impression of the team from my interviews.

Energysage was also in the process of scaling rapidly, so my work once again focused on modernizing and reinforcing our web technologies to improve page speed, search ranking, and new user experience. Working with members of Energysage's marketing team, I updated our content tooling to lazy-load images by default, and automatically update pages in our knowledgebase with up-to-date market data. This reduced time to paint and user bounce rates, and allowed us to climb in search engine rankings.

As our customer base grew, it became imperative to modernize some of our less performant and maintainable services. Having recently worked on our content pages, I migrated our search solution for those pages to Elasticsearch. I then migrated our job queue to a hosted solution, reducing transaction time on site by removing that bottleneck while also reducing nominal memory utilization on our host servers.

Energysage's other challenge to scale was our manual business processes, so my next project was to automate some common actions our business partners did on our site. Working with our Heads of Product and Partner Support, I added suggestions and pre-fill fields based on partners' usual quotes to their quoting forms. This allowed installers to more quickly assess properties and scope projects, helping us achieve a 15% QoQ increase in quote volume after launch.

Talking with my coworkers, it was very clear that battery storage was a big opportunity for the marketplace. We hadn't yet started designing this feature since our product team was quite small at this time, but updated legislation had made batteries for solar systems a much better deal for our customers. Working with a colleague from the marketing team, I compiled user and market research, and developed a feature plan to develop and release the company's first adjacent product: quoting for batteries.

Planning for battery quotes took several months. Since the two of us were working on this as a side project (I was supporting a migration to Python 3 at the time), it took us a while to understand the problem space and gather consensus for our proposed solution. However, we eventually got approved to add this quote type. At this point, I was most familiar with the project, and lead a team of three to implement it. I focused on coordinating the effort, and clearing technical roadblocks on our way (a surprise port from framework-less jQuery to javascript view classes stands out). In the end, we were able to stick to our proposed timeline and launch without incident.

The big thing my time at Energysage taught me was the value of comprehensive testing and choosing/maintaining good testing tools\*. Towards the end of my time, I was juggling two major projects: a Python 3 migration and developing the battery storage marketplace, which would have been impossible to do without automated quality assurance. For the former, my colleagues and I made the wise decision to focus on our test plan early, and were lucky enough to be cleard for close to two months of non-feature work (much of the credit for this goes to our CTO, a fantastic communicator). I was responsible for updating and testing some low-level code (session serialization, text encoding) which needed to be validated in a production-like environment, something we didn't have. Working with our CTO, who was acting lead SRE at this time, I documented\*\* the steps to set up a production-like environment, and adapted parts of the process to account for Staging concerns e.g. adding ORM managers to anonymize personal data when a production DB snapshot was uploaded. Having a validation server allowed us to supplement our unit and integration tests with User Acceptance Testing. Having the best knowledge of this environment, I ended up coordinating that UAT. We ended up catching some regressions in our search service, as well as some existing bugs in customer-facing flows, and as a result, once again launched without major incident.

### Key Skills:
- Project Planning
- User Research + writing User Stories
- Observability using SRE/DBA tools
- Automated Validation and User Acceptance Testing
- Mentorship and Teaching

### Key Deliverables:
- Default CDN images to lazy load
- Task queue migration from RabbitMQ to SQS
- Automated suggestion engine for business flows
- Python 3 Migration
  - Session portability shim (to support gradual cutover)
  - DB migrations and anonymizer
  - User Acceptance Testing plan and coordination
- Battery Storage Marketplace
  - High-level feature design
  - Feature specification and scoping
  - Feature implementation
  - Automated and user acceptance testing

### Lesson Learned:
Investment in automated testing yields stellar returns, especially if you validate the tests fully characterize the system.

\* The other big lesson from this job (not a new one, though) was the high ROI of investing in user research.
\*\* If I had more time, I would have liked to fully automate the process through Terraform and Invoke or similar tools.

## 2015 - Warby Parker: Full-stack and playing the full field

In 2015, I moved to New York and started working at Warby Parker. I was excited to take this job, and saw it as an ability to leverage my web application engineering skills as well as my industry knowledge of medical software.

When I joined Warby Parker, the company was smaller than it is today, and the tech team was just beginning to develop specialist roles. This meant that over my first two years there, I would take on a variety of roles, ranging from front-end engineering for the company's web store to developing controller logic for allocation frames (another fun ETL project!). I really enjoyed the experience of scaling and modernizing our ecommerce features as the company grew to serve more customers, with a broader range of product, across more online and brick-and-mortar channels.

One project that stands out to me from this time was integrating Prescription Check, a telemedicine solution built as a proof of concept, into our business suite. I was charged with structurally improving this prototype medical application to ensure reliable production performance, whilst maintaining HIPAA compliance across all aspects of the service. I worked across the full application stack for this service: updating the React frontend and styling to follow company best practices, designing an API to coordinate two stateful systems (prescription approval and optical fulfillment controllers), and developed the first dashboards and metrics to ensure uptime and function for a complex multi-client process. The work was technically grueling but paid off: we were able to automate 40+ hours of manual reconciliation and fulfillment overrides per week, while reducing approval and fulfillment times by close to a business day.

### Key Skills:
- Frontend Engineering (React + Sass &ndash; no relation)
- RESTful API design
- Database Schema design and migration
- ETL design
- Service infrastructure design in AWS
- Observability
- Incident response and facilitating post-incident reviews

### Key Deliverables:
- Ecommerce frontend pages (shopping gallery, prescription upload pages, user profiles)
- Fulfillment rule engine for lens cutting
- Accounting system integration to track non-saleable consumable goods cost
- Telemedicine system structural improvements and integration
- iPad app dashboard for prescription review

### Lesson Learned
Whenever possible, let the database do the work.

## 2013 - Vecna: Health, usability, and accessibility

In 2013, I went on to work at another company with robotics projects, but in their Electronic Health Records department\*. This was my first experience with full-stack engineering. At the time, the healthcare industry was adapting to new "Meaningful Use" federal standards for functionality, accessibility, and portability of health record systems.

My team was initially charged with modernizing the frontend code (to Backbone, the state of the art at the time) so we could ensure compliance and accessibility of our Patient Dashboard and Patient Onboarding experiences. This was my first time managing dependencies across and between the client/server layers of a web application. It was also my first time working around the limits of an ORM - ever since then I've worked to Let The DB Do The Work whenever possible.

Later at Vecna, I led a team of 3 which automated most user onboarding: an ETL\*\* pipeline to transfer patient data (via an XML document mandated by the new federal standards) between health record systems. The key technical challenge on this project was developing and validating a performamt XML deserializer for a critical flow. The experience taught me a lot about testing complex code&mdash;specifically, the value of identifying and decoupling units under test. Additionally, since this was a strategically important project, I ended up working with our Client Manager to develop batch processing solutions for larger clients, who needed to migrate up to 50,000 patient health records at a time.

### Key Skills
- Dependency Management
- Browser Compatibility Management
- Feature Planning for third-party integrations
- Teaching and mentoring

### Key Deliverables
- Electronic Health Record Dashboard frontend
- Electronic Health Record Onboarding/Profile frontend
- Health Record ETL pipeline and backing XML parser library
- Bespoke integrations for health record ETL

### Lesson Learned
Compartmentalize code wisely to reduce uncertainty in planning and validation.

_\* Vecna worked on a rather broad suite of applicatiions at this time. Since then, the company has split into separate Robotics and Healthcare companies._ 
_\*\* [Extract, Transform, Load](https://en.wikipedia.org/wiki/Extract,_transform,_load)_

## 2010 - Draper Laboratory: Hello World, hello API users

In college, I was really into robots (since age 11 really, but that's not as relevant to my career story). I was lucky enough to work on a robotics project for my undergraduate capstone, and to be hired by our sponsor company to continue work on that project.

At Draper, I was responsible for developing software test fixtures for a variety of sensors. In addition, I (as my team's first dedicated software hire) was de facto responsible for estimating efforts and setting timelines for software development.

Towards the end of my time at Draper, I wrote my first microservice, in a sense: an API to stream sensor test data from our test harnesses to client machines for data acquisition and processing.

### Key Skills
- Software validation
- Project estimation and planning
- Software release management

### Key Deliverables
- Release plans for sensor monitor API
- Validation plans for test harness controllers
- A documented standard library for sensor testing applications

### Lesson Learned
Communicate (strategically) with your end users and take the time to understand their actual needs. Many problems are [XY Problems](https://en.wikipedia.org/wiki/XY_problem).
