---
layout: layouts/base.njk
title: More Details
---

# Things I've Done 
_The long-form version_

Additional context for the top-level points in my resume. If you're interested in some job I reference there, there's more detailed information on that here.

------

## 2021 - dbt Labs: Task orchestration, API design, and user experience

In early 2021 I joined dbt Labs (dbt = 'data build tool', a toolkit for data transforms) on the Shipments team. The team focused on interactions between the software suite (dbt Cloud), data warehouses, and the transform runner.

### Environment Variable Management

The first project I took on was launching and refining an API to set custom environment variables for data transforms (jobs). This was an often-requested feature which was in development when I started this job. I worked with Ryan, the tech lead for this project, to complete and test the first release of this API. We added a set of integration tests, which allowed us to assert that the API was fit for a beta release to users.

Once released, we iterated on that beta and resolved some issues which came up in real-world use (e.g. requiring/prepending a prefix for custom variables to differentiate them from built-ins, supporting bulk edits) and issues we foresaw (supporting encrypted secret variables, query/index optimization to reduce lookup/write overhead). I took some time at this point to refactor the code so we could unit test the business logic for this API in isolation from the permissions/request handling code which was exercised by the integration tests. (If I'd come onto this project earlier, I would have likely pushed for unit tests to come first.)

Several months later, I rewrote the UI for environment variable management. Working closely with our Product Design team and another engineer, I rebuilt the UI using contemporary React (hooks, functional components) and our new component library. This was an excellent opportunity to pair program, and I took advantage of that to introduce this pattern, which helped my counterpart and I manage the complexity of a total rewrite. We chose to take the time to write automated tests for this page, making the final product more durable and regression free.

The environment variables tools are still used today - they've been adopted by nearly all of dbt's enterprise clients.

### Task Orchestration for Transforms

A few months in, my team's focus turned to job scheduling, which was a major performance bottleneck (~90% of jobs started >60s past scheduled time). We chose to break from Python and write the service as a distributed system using Golang, which I learned on the fly as we developed it. I developed a testing approech of which let us build  parameterized unit tests without any heavy mocks. These simple yet effective tests allowed great coverage and high quality code. At launch time, our scheduler ran 10,000 times faster than the one it replaced, and we only saw one minor regression at launch day.

### Credential/Configuration Overhaul

As our user base grew, we had to address the state of our data warehouse integrations. I identified an issue with the design of that code: inconsistent representations of our connection/credential configs in database, which led to inconsistent save/update behavior. I wrote a technical plan to move us to a better place and got to work gathering stakeholder consensus.

Building on work I'd done earlier, I updated our controller logic to allow safe and consistent updates (PATCH for partial updates, POST for writes). The consolidated logic let me greatly simplify the hooks we were using on the front end. The team and I chose to not prioritize fixing the database schemas due to expected scope, but the new logic we'd added was more than adequate. In the end, this removed the third most common cause for escalated support calls, and a major pain point for users.

------

## 2020 - Smartsheet: Enterprise scale features, observability, and on-call improvements

Working at a small company meant deploying at a limited scale. To learn how to build systems which served a larger audience, I took a job with [Smartsheet](https://www.smartsheet.com/), a SaaS provider for enterprise productivity software.

### Form Toolkit Enhancements

My team focused on tools to let users build and share fillable forms, and our first project was to design the next iteration of one of our form solutions: Update Requests. I wrote tests and documentation to characterize the current front end behavior and controller logic for the feature, so we could build the next version with confidence. Working with my team to identify more use cases, I added more automated tests to safeguard against any system regressions. This allowed me to develop a standard submission handler for all types of form. At the end of this project, my team and I added observability tooling for this feature, allowing on-call staff to work more efficiently.

### Form Themes Groundwork

After laying the groundwork to quickly iterate on Update Requests, my team moved onto other forms-related features. I planned and scoped the addition of themes to our intake forms, accounting for development, testing, and eventual release of the product. I then set milestones for hand-offs with relevant stakeholder teams. After the plan was reviewed and accepted (first by the larger team, and then by our division manager and the CTO), I wrote the JIRA epic/tickets for this effort, working with product/engineering colleagues to reduce planning uncertainty and set phases/milestones so we could test/roll out changes incrementally.

I onboarded to my role at Smartsheet quickly, laid a clear product roadmap for my teams, and demonstrated technical and product acumen to get buy-in from relevant stakeholders. Ultimately the role was more product/operations heavy than was communicated, so found a new job.

------

## 2019 - Energysage: Marketplace Go-To-Market, and greenfield product development

In 2019, I moved back to Boston, and to [Energysage](https://www.energysage.com). I wanted to get more practice working with the languages and technologies (contemporary web stack, SQL, AWS + deploy/ops tools) I'd worked with at Warby Parker, and had experience working on marketplace products. I also liked the company size (Series B), mission (clean energy), and had a good impression of the team from my interviews.

### Performance and Scaling

Energysage was growing quickly when I joined, and my work focused on scaling our web stack to improve page speed, search ranking, and user onboarding. Working with members of Energysage's marketing team, I updated our CMS to lazy load images assets and automatically update reference pages with up-to-date market data. These improvements significantly improved our SEO, and today, Energysage is Page 1 ranked for a variety of solar-related search engine queries.

As our customer base grew, we needed to prioritize scaling less performant services. On the frontend, I updated our reference pages to use Elasticsearch for user queries. On the backend, I moves our job queue to a hosted solution, reducing transaction time for vendors trying to submit quotes to our marketplace.

### Business Flow Enhancements

Energysage also needed to scale manual business processes within our back-office suite and business partner experience. Working with our Heads of Product and Partner Support, I added pre-fill suggestions for our quoting flow, driven by data around respective partners' quoting trends. Allowing installers to more quickly assess properties and scope projects, paired with faster quote submission, helped us achieve a 15% QoQ increase in quote volume after launch.

### Building Our Second Marketplace

Talking with counterparts in revenue, it was very clear that battery storage was a big opportunity for the marketplace. We hadn't yet started designing this feature, but updated legislation had made batteries for solar systems a much better business expansion opportunity. I led a small cross-functional team which compiled user and market research and developed a feature plan to develop and release the company's first adjacent product: a marketplace for home battery installs. After presenting a feature proposal with estimates for feature ROI and level of effort to implement to the CEO and Head of Product, we got cleared to break off a small team and implement this feature.

At this point, I was most familiar with the project, so I acted as team lead for the feature team, with 2-3 engineers on staff. I focused on coordinating the effort, and clearing roadblocks on our way (a port from framework-less jQuery to javascript view classes stands out). We were able to meet our proposed timeline and launch without incident.

### Takeaways

The big thing my time at Energysage taught me was the value of comprehensive testing and choosing/maintaining good testing tools\*.
- Towards the end of my time, I was juggling two major projects: a Python 3 migration and developing the battery storage marketplace, which would have been impossible to do without automated quality assurance. For the former, my colleagues and I made the wise decision to focus on our test plan early, and our CTO dedicated two months of the team's time to thoroughly prepare and safely migrate the code base.
- During the migration effort, I was responsible for updating and testing some low-level code (session serialization, text encoding) which needed to be validated in a production-like environment, something we didn't have. My CTO and I set up a production-like validation environment, and I developed ORM managers to anonymize personal data when a production DB snapshot was uploaded.
- Having a validation server allowed us to supplement our unit and integration tests with User Acceptance Testing, further de-risking larger or more complex changes. I coordinated User Acceptance Testing for the Python 3 migration. We prevented regressions in our search service, as well as catching existing bugs in customer-facing flows, and as a result, we migrated our production systems  without major incident.

### Key Skills:
- Project Planning
- User Research + writing User Stories
- Understanding of observability tooling (e.g. APM, database traces)
- Automated Validation and User Acceptance Testing
- Mentorship and Teaching

### Key Deliverables:
- Developed a new Battery Storage Marketplace
  - High-level feature design
  - Feature specification and scoping
  - Feature implementation
  - Automated and user acceptance testing
- Python 3 Migration
  - Set up a validation environment for automated and user testing
  - User Acceptance Testing plan and coordination
  - Session portability shim (to support tiered migration)
  - Added tooling for DB migrations and data set anonymization
- Developed an automated suggestion engine for the Quote Wizard
- Task queue migration from RabbitMQ to SQS
- Default CDN images to lazy load

### Lessons Learned:
- Investment in automated testing yields stellar returns, especially if you validate the tests fully characterize the system.
- Full rewrites seem really appealing, but testing-driven gradual rewrites are easier to justify, easier to plan, and get delivered closer to on-time.

_\* The other big lesson from this job (not a new one, though) was the high ROI of investing in user research._

_\*\* If I had more time, I would have liked to fully automate the process through Terraform and Invoke or similar tools._

------

## 2015 - Warby Parker: Full-stack engineering and dealing with scale

In 2015, I moved to New York and started working at [Warby Parker](https://www.warbyparker.com). I hoped to leverage my web application engineering skills and knowledge of medical software, and learn more about the deploy/runtime infrastructure backing WSGI workers, databases, standalone microservices, etc.

When I joined Warby Parker, the tech team was just beginning to develop specialist roles. This meant that over my first two years there, I would take on a variety of roles, starting with product galleries, seasonal landing pages, and market analytics tools for our customer insights team. Many of these projects were quite short, so I'm not going to cover them all.

### Distributed Services for Allocation and Accounting

As our sales grew, I enhanced the logic for product allocation (another ETL project). Since this module was unrelated to any of the core business logic and needed a specific SSL library to work with our Supply Chain tooling, I designed and implemented a microservice to handle the ETL without affecting our WSGI service. This let us effectively allocate a broader range of products across our online and brick-and-mortar channels.

More sales meant we needed to automate more of our accounting and audit tools (e.g. for tracking Zero Dollar Units shipped with glasses). Since this code could be audited along with our financial records, we also built it as a distributed service. I worked directly with our Lead Fiancial Engineer to build, completely test, and deploy this service. It ended up saving our finance team hours of manual accounting for non-glasses items every week.

### Telemedicine System Integration

I productionised the PoC for a greenfield optometry telemedicine app and integrated it with our business suite, while maintaining HIPAA compliance across all aspects of the service. I worked across the full application stack for this service: updating the layout, styling, and interactivity of our doctor portal, designing an API to coordinate two stateful systems (prescription approval and optical fulfillment controllers), and developed dashboards and metrics so we could observe the system and confirm we were meeting SLAs. The work was technically grueling but paid off: we were able to automate 40+ hours of manual reconciliation and fulfillment overrides per week, while reducing approval and fulfillment times by close to a business day.

### Key Skills:
- Frontend Engineering using Resct and the Dispatcher pattern
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

### Lessons Learned
- Whenever possible, let the database do the work.
- Fragile planning slows delivery time just as much as fragile tools. Whenever possible, optimize work for maximum flow.

------

## 2013 - Vecna: Health APIs and accessible clients

In 2013, I took a job at [Vecna](https://www.vecna.com/), continuing to develop APIs, this time for Electronic Health Records (EHRs).

This was my first experience with full-stack engineering for web applications, and I was excited to learn about controller logic and front-end clients interacting with APIs. My team was initially charged with modernizing the frontend code (to Backbone, the state of the art at the time). At the time, the healthcare industry was adapting to new federal standards for functionality, accessibility, and portability of health record systems, so my team had to ensure standards compliance of our Patient Dashboard and Patient Onboarding experiences.

This was my first time managing dependencies across and between the client/server layers of a web application. I learned new-to-me concepts such as vendorization, containerization, and planning for emergent requirements (from clients and evolving standards). It was also my first time working around the limits of an ORM - ever since then I've worked to Let The DB Do The Work whenever possible.

### ETLs Supporting Enterprise Client Migrations

Later at Vecna, I led a team of 3 which automated most user onboarding using an ETL pipeline to transfer patient data (via an XML document mandated by the new federal standards) between health record systems. The key technical challenge on this project was developing and validating a document parser/data loader for this complex markup. The experience taught me a lot about testing complex code&mdash;specifically, the value of identifying and decoupling units under test. Since this was a strategically important project, I worked with our Client Manager to roll a bulk migration tool out for larger clients, who needed to migrate up to 50,000 patient health records at a time.

### Key Skills
- Dependency Management
- Browser Compatibility Management
- Feature Planning for third-party integrations
- Teaching and mentoring

### Key Deliverables
- API for healthcare data (specifically, for procedures & medications provided)
- Electronic Health Record Dashboard/Onboarding/Profile frontend
- Health Record ETL pipeline and backing XML parser library
- Bespoke integrations for health record ETL

### Lesson Learned
Set service boundaries wisely to reduce uncertainty in planning and validation.

------

## 2010 - Draper Laboratory: Hello World, hello API users

In college, I was really into robots, got lucky enough to work on a robotics project for my undergraduate capstone, and got hired by our sponsor company to continue work on that project.

### Autonomous Vehicle Software

At Draper, I was responsible for developing software test fixtures for a variety of sensors. As my team's first dedicated software hire, I was also responsible for estimating efforts and setting timelines for software development. I planned my own projects, set milestones, and managed stakeholder needs for my first major deliverable: a navigation system and sensor data logger for an autonomous ground vehicle used for RF research.

This project was successful and I followed it up by supporting another unmanned vehicle project: a simulator to validate behavior of a proposed autonomous underwater vehicle.

### Sensor Data Logging and Analysis

Towards the end of my time at Draper, I wrote my first network service: an API to control a sensor testing machine, and capture validation data from the sensor under test. This service was robust enough to stream and save high-speed data (sub-millisecond update rate) from our test harness, while allowing engineers to inspect system state and captured data live during tests.

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
