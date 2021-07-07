# Things I've Done
_What have I done?_

As of this writing, I've been working in some software capacity for just over a decade now. It amazes me both how much I've learned in this time, and also that it's been enough time to have a career narrative rather than just some greatest hits. Here's that career story.

------

## 2020 - Smartsheet: At-scale features, observability, and on-call improvements

After participating in several major releases back-to-back, I wanted to learn how to better launch features and maintain systems at scale. To that end, I took a job with [Smartsheet](https://www.smartsheet.com/), a SaaS provider for enterprise productivity software.

My team focused on tools for user-generated data intake forms, and our first project was to design the next iteration of one of our form solutions: Update Requests. I worked to characterize the current front end behavior and controller logic for the feature, so we could build the next iteration on a foundation of good documentation. After that, my team and I closed gaps in our automated characterization and unit tests to safeguard against any system regressions. This allowed me to then make the first significant update, standardizing the default on-submit behavior of these forms with that of the other form types. Finally, my team added observability tooling for Update Requests, in order to support our on-call rotation.

After laying the groundwork to quickly iterate on Update Requests, the team split up to plan and implement a variety of features to serve the evolving demands of enterprise clients adjusting to working remotely during COVID. I led a subteam which planned and scoped the addition of themes to our intake forms, accounting for development, testing, and eventual release of the product, as well as setting milestones for handoffs with relevant stakeholder teams. After the plan was reviewed and accepted (first by the larger team, and then by our division manager and the CTO), I wrote and worked with product/engineering colleagues to groom a planning epic, kicking off our first release.

------

## 2019 - Energysage: Marketplace Go-To-Market, and greenfield product development

In 2019, I moved back to Boston, and to [Energysage](https://www.energysage.com). I wanted to get more practice working with the languages and technologies (contemporary web stack, SQL, AWS + deploy/ops tools) I'd worked with at Warby Parker, and had experience working on marketplace products. I also liked the company size (Series B), mission (clean energy), and had a good impression of the team from my interviews.

Energysage was also in a high-growth stage when I joined, so my work once again focused on scaling our web stack to improve page speed, search ranking, and user onboarding. Working with members of Energysage's marketing team, I updated our CMS to render below-fold images such that they would lazy-load, and automatically update pages in our knowledgebase with up-to-date market data. This reduced time to paint and user bounce rates, and allowed us to climb in search engine rankings. Today, Energysage is Page 1 ranked for a veriety of solar-related search engine queries.

As our customer base grew, we leveraged user telemetry, application performance monitoring, and feedback from business counterparts to prioritize scaling less performant services. Having recently worked on our content pages, I migrated our search solution for those pages to Elasticsearch. I then migrated our job queue to a hosted solution, reducing transaction time on site by removing that bottleneck while also reducing nominal memory utilization on our host servers.

Energysage's other challenge to scale was our manual business processes, so my next project was to automate common actions in our back-office suite and business partner experience. Working with our Heads of Product and Partner Support, I added pre-fill suggestions for our quoting flow, driven by data around respective partners' quoting trends. This allowed installers to more quickly assess properties and scope projects, helping us achieve a 15% QoQ increase in quote volume after launch.

Talking with my coworkers, it was very clear that battery storage was a big opportunity for the marketplace. We hadn't yet started designing this feature since our product team was small and focusing on hiring at the time, but updated legislation had made batteries for solar systems a much better deal for our customers. Along with my counterpart in marketing, I compiled user and market research, and developed a feature plan to develop and release the company's first adjacent product: quoting for batteries.

Planning for battery quotes took several months. Since the two of us were working on this as a side project (I was supporting a migration to Python 3 at the time), it took us a while to understand the problem space and gather consensus for our proposed solution. After presenting a feature proposal with estimates for feature ROI and level of effort to implement to the CEO and Head of Product, we got cleared to break off a small team and implement this feature (returning to the migration effort post-launch).

At this point, I was most familiar with the project, so I acted as team lead for the feature team, with 2-3 engineers on staff. I focused on coordinating the effort, and clearing roadblocks on our way (a surprise port from framework-less jQuery to javascript view classes stands out). We were able to meet our proposed timeline and launch without incident.

The big thing my time at Energysage taught me was the value of comprehensive testing and choosing/maintaining good testing tools\*.
- Towards the end of my time, I was juggling two major projects: a Python 3 migration and developing the battery storage marketplace, which would have been impossible to do without automated quality assurance. For the former, my colleagues and I made the wise decision to focus on our test plan early, and were lucky enough to be cleard for close to two months of non-feature work (much of the credit for this goes to our CTO, a fantastic communicator).
- During the migration effort, I was responsible for updating and testing some low-level code (session serialization, text encoding) which needed to be validated in a production-like environment, something we didn't have. Working with our CTO, who was acting lead SRE at this time, I documented\*\* the steps to set up a production-like environment, and adapted parts of the process to account for Staging concerns e.g. adding ORM managers to anonymize personal data when a production DB snapshot was uploaded.
- Having a validation server allowed us to supplement our unit and integration tests with User Acceptance Testing, further de-risking the migration. Having the best knowledge of this environment, I ended up coordinating that UAT. We ended up catching some regressions in our search service, as well as some existing bugs in customer-facing flows, and as a result, once again launched without major incident.

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

_\* The other big lesson from this job (not a new one, though) was the high ROI of investing in user research._

_\*\* If I had more time, I would have liked to fully automate the process through Terraform and Invoke or similar tools._

------

## 2015 - Warby Parker: Full-stack and playing the full field

In 2015, I moved to New York and started working at [Warby Parker](https://www.warbyparker.com). I was excited to take this job, and saw it as an ability to leverage my web application engineering skills as well as my industry knowledge of medical software.

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

------

## 2013 - Vecna: Health, usability, and accessibility

In 2013, I went on to work at [Vecna](https://www.vecna.com/), another company with robotics projects, but in their Electronic Health Records department\*. This was my first experience with full-stack engineering for web applications. At the time, the healthcare industry was adapting to new "Meaningful Use" federal standards for functionality, accessibility, and portability of health record systems.

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

------

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
