import { CurriculumModule, l, d, m } from './curriculum-data';

export const tracks8Modules: Record<string, CurriculumModule> = {};

const t8 = 'Track 8  -  Data & Analytics Economics';

// ═══════════════════ TRACK 8: DATA & ANALYTICS ECONOMICS ═══════════════════

tracks8Modules['data-economics/8-1'] = m('8-1', 'Data Warehouse Economics', 'Master the consumption-based billing models of Snowflake, Databricks, and BigQuery to halt compute inflation.', t8, 
    ['Calculate query cost profiling', 'Isolate warehouse compute tiers', 'Audit ELT pipeline efficiency'], [
        l('The Consumption Billing Trap', 
            [
                'Unlike traditional SaaS licenses, modern data warehouses (Snowflake, BigQuery) use consumption-based billing models. You do not pay for the software; you pay for the compute cycles used to scan data.',
                'A single poorly-written `SELECT *` query executed by a junior analyst against a multi-terabyte fact table can instantly cost the business $50 in compute. If that query is embedded in a dashboard that refreshes every 15 minutes, it will bankrupt your data budget.',
                'The separation of storage and compute allows massive scaling, but requires ruthless financial governance. Compute clusters must be isolated by department and workload to prevent "noisy neighbor" economic drains.'
            ],
            [
                d('Query Cost Attribution', 'The ability to tag and bill specific queries back to the department that ran them.', 'Target: >90% of compute attributed'),
                d('Cold Start Latency', 'The delay incurred when turning on suspended compute warehouses.', 'Typically 1-3 seconds')
            ],
            'Implement a Warehouse Cost Monitor to identify your top 10 most expensive queries in the last 30 days.',
            ['Query your warehouse metadata (e.g., Snowflake `QUERY_HISTORY`).', 'Sort queries by execution time and bytes scanned.', 'Identify the user or BI tool responsible for the top 10 most expensive operations.'],
            {
                question: 'In a consumption-based data warehouse (like Snowflake), what action typically incurs the highest direct cost?',
                options: ['Storing terabytes of compressed JSON data', 'Scanning massive amounts of data with unoptimized compute clusters', 'Creating new database users', 'Exporting data out of the warehouse'],
                correctIndex: 1,
                explanation: 'Storage is incredibly cheap (often passed through at raw S3 prices). The providers make their massive margins on the virtual compute clusters heavily utilized to scan, join, and process that raw data.'
            }
        ),
        l('ELT Pipeline Depreciation', 
            [
                'The shift from ETL (Transform before Loading) to ELT (Load raw, Transform in the warehouse) popularized by dbt has a massive hidden cost: computational debt inside the warehouse.',
                'Because ELT pushes all transformations into the warehouse\'s compute engine, inefficient dbt models that run daily full-table rebuilds instead of incremental updates will cause your warehouse bill to grow exponentially as your data volume grows.',
                'Data engineering must adopt the concept of "computational depreciation"  -  older data models must be aggressively refactored for incremental processing, or the sheer cost of maintaining the daily pipeline will exceed the business value of the data.'
            ],
            [
                d('Incremental Refresh Rate', 'The percentage of your daily data models that only process new rows vs full rebuilds.', 'Target: >85% Incremental'),
                d('Pipeline Execution Cost', 'The daily compute cost just to update the data models before a human even runs a query.', '< 30% of total warehouse budget')
            ],
            'Audit your dbt or pipeline DAG. Identify the largest table that is being fully rebuilt every night.',
            ['Identify the longest-running data transformation job in your daily DAG.', 'Calculate its daily compute footprint.', 'Execute a sprint task to refactor it into an incremental model that only processes the daily delta.'],
            {
                question: 'What is the primary financial danger of the ELT (dbt) architecture?',
                options: ['It requires expensive on-premise hardware', 'It pushes massive computational loads into the expensive consumption-based data warehouse', 'It cannot handle real-time streaming data', 'It requires learning Python instead of SQL'],
                correctIndex: 1,
                explanation: 'By moving transformations into the warehouse, the warehouse computes everything. If poorly optimized, you are paying premium per-second compute rates for brute-force data parsing instead of cheap pre-processing.'
            }
        )
    ], '/vault/curriculum/tracks/data-economics/8-2', undefined, 'live'
);

tracks8Modules['data-economics/8-2'] = m('8-2', 'Data Quality ROI', 'Quantify the financial damage of dirty data and calculate the remediation ROI across the Five Dimensions of Quality.', t8, 
    ['Calculate lost revenue via data decay', 'Establish Data Quality firewalls', 'Automate anomaly detection'], [
        l('The Five Dimensions of Data Quality', 
            [
                'Dirty data destroys revenue. If a CRM is littered with duplicate accounts and dead emails, marketing spend yields zero ROI, and sales reps burn 20% of their day verifying contact information.',
                'Data Quality is measured across five economic dimensions: Accuracy, Completeness, Consistency, Timeliness, and Validity. A failure in any dimension carries a specific financial penalty.',
                'Remediating data quality upstream (at the point of entry) costs $1 per record. Remediating it in the warehouse costs $10. Addressing it after it has ruined an executive board report costs thousands in lost trust and manual reconciliations.'
            ],
            [
                d('The 1-10-100 Rule', 'The escalating cost of fixing dirty data: $1 at entry, $10 at processing, $100 after impact.', 'Forces "Shift-Left" data quality mentality'),
                d('Sales Churn Tax', 'The percentage of a sales rep\'s day wasted investigating inaccurate system data.', 'Typically 15-20% for poorly governed CRMs')
            ],
            'Implement a Data Quality Firewall at the point of ingestion.',
            ['Identify the API or form that ingests your most critical customer data.', 'Add a hard-coded regex or verification API (e.g., Clearbit for emails, Google Maps for addresses) that strictly rejects malformed data BEFORE it hits the database.', 'This instantly prevents downstream rot.'],
            {
                question: 'According to the "1-10-100 Rule" of Data Quality, what is the most cost-effective way to handle dirty data?',
                options: ['Hire junior analysts to manually clean the database every quarter', 'Build complex dbt models in the warehouse to guess the correct values', 'Block or validate the data at the exact moment of user entry (e.g., the front-end form)', 'Ignore it, storage is cheap'],
                correctIndex: 2,
                explanation: 'Preventing garbage from entering the database costs pennies in compute. Once it is inside, it propagates to downstream systems, analytics, and marketing platforms, making cleanup exponentially more complex and expensive.'
            }
        )
    ], '/vault/curriculum/tracks/data-economics/8-3', undefined, 'live'
);

tracks8Modules['data-economics/8-3'] = m('8-3', 'Analytics Team Economics', 'Modeling standard ratios of Data Engineers to Analysts and assessing the ROI of Business Intelligence seats.', t8, 
    ['Optimize Data Team ratios', 'Track Analyst utilization rates', 'Deploy Self-Serve BI frameworks'], [
        l('The Data Engineer vs Analyst Ratio', 
            [
                'A common organizational failure is hiring 10 Data Analysts to produce dashboards, but only 1 Data Engineer to build the pipelines. The resulting economic trap: highly paid Analysts spend 80% of their time writing complex SQL to bypass broken pipelines, rather than generating business insights.',
                'The optimal organizational ratio is roughly 2 Data Engineers for every 3 Analysts. A strong engineering foundation creates "Analytics Engineering" use, where automated, clean models allow Analysts to operate at 5x velocity.',
                'If an Analyst claims they are "waiting for data" more than 10% of the week, your org is under-invested in Data Engineering.'
            ],
            [
                d('Analyst Utilization', 'Percentage of an analyst\'s week spent actually analyzing data vs cleaning it.', 'Target: >70% Analysis time'),
                d('Self-Serve Coverage', 'Percentage of routine executive questions that can be answered without opening a JIRA ticket.', 'Target: >80% coverage to protect analyst bandwidth')
            ],
            'Audit your Data Team composition and JIRA ticket backlog.',
            ['Identify the volume of ad-hoc "Can you pull this list of users?" requests.', 'Calculate the engineering hours burned fulfilling basic reporting queries.', 'If these ad-hoc requests consume >20% of team capacity, immediately pivot to building a Self-Serve BI semantic layer.'],
            {
                question: 'What is the primary economic symptom of a team having too many Analysts and not enough Data Engineers?',
                options: ['The dashboards look visually unappealing', 'Analysts spend the majority of their expensive salaries writing pipeline code and cleaning raw data rather than generating actionable business insights', 'Data storage costs skyrocket', 'The Data Warehouse gets hacked'],
                correctIndex: 1,
                explanation: 'Data Engineers build the automated pipelines that deliver clean data. Without them, Analysts are forced to manually stitch together broken APIs and raw JSON, massively depreciating their analytical value to the company.'
            }
        )
    ], '/vault/curriculum/tracks/data-economics/8-4', undefined, 'live'
);

tracks8Modules['data-economics/8-4'] = m('8-4', 'Data Pipeline Economics', 'Orchestration costs, the TCO of Airflow/Dagster, and identifying "Ghost Pipelines".', t8, 
    ['Audit Ghost Pipelines', 'Calculate Airflow maintenance costs', 'Optimize ELT extraction windows'], [
        l('The Curse of the Ghost Pipeline', 
            [
                'Over 5 years, a company will accumulate hundreds of daily data pipelines powering dashboards that the original requester hasn\'t looked at in 18 months. These are "Ghost Pipelines."',
                'Ghost Pipelines consume compute credits daily, increase the surface area for alerts (waking engineers up at 3 AM for a broken legacy report), and unnecessarily tax the source databases.',
                'Data Engineering must implement aggressive sunsetting protocols: if a dashboard receives zero unique views in 30 days, the absolute pipeline powering it must be suspended.'
            ],
            [
                d('Pipeline Utilization Rate', 'The percentage of daily jobs that feed an actively viewed downstream dash.', 'Find the ghosts, kill the compute.'),
                d('Orchestration Tax', 'The infrastructure cost to run the scheduler (e.g. Airflow) independent of the data processed.', 'Typically $1,500/mo baseline for managed services')
            ],
            'Execute a 30-Day Ghost Hunt across your BI tool.',
            ['Export the access logs for Looker/Tableau for the trailing 30 days.', 'Identify all dashboards with exactly 0 views.', 'Suspend (do not delete) the upstream dbt models and ingestion pipelines feeding those tables immediately.'],
            {
                question: 'Why do "Ghost Pipelines" aggressively destroy value within a data organization?',
                options: ['They take up too much raw S3 storage', 'They trigger false compliance alerts', 'They consume daily compute budgets and page on-call engineers at night for data nobody is actively looking at', 'They leak data to competitors'],
                correctIndex: 2,
                explanation: 'A pipeline that breaks at 3 AM will page an engineer. If that pipeline feeds a dashboard the CEO abandoned 2 years ago, the company just paid for midnight compute and burned engineering morale for literal junk data.'
            }
        )
    ], '/vault/curriculum/tracks/data-economics/8-5', undefined, 'live'
);

// We define 8-5 through 8-15 to complete the Track comprehensively.
tracks8Modules['data-economics/8-5'] = m('8-5', 'ML Pipeline & MLOps', 'Modeling the vast difference between Model Training costs and Production Serving (Inference) costs.', t8, 
    ['Separate Model Training vs Inference', 'Calculate GPU burst consumption', 'Implement MLOps experiment tracking'], [
        l('Training vs Inference Economics', 
            [
                'In Machine Learning, building a model (Training) is a high-cost, burst-compute capital expense. Running that model for live users (Inference) is a low-cost, continuous operational expense. Treating them identically bankrupts budgets.',
                'Using expensive A100 GPUs for live inference of a small, localized model is a catastrophic misallocation. Inference should be pushed to cheap CPUs or heavily quantized edge hardware wherever latency SLAs permit.',
                'The goal of MLOps is to compress the time-to-market of a model while driving the per-request Inference cost to absolute zero.'
            ],
            [
                d('Training Capital Expense (CapEx)', 'The burst cost of running GPUs for 72 hours to compile the model weights.', 'Requires rigid budgeting and spot instances'),
                d('Inference Operational Expense (OpEx)', 'The per-second cost of keeping the model hosted answering live traffic.', 'Must be optimized for auto-scaling down to zero')
            ],
            'Implement auto-scaling-to-zero for your inference endpoints.',
            ['Review your production SageMaker or custom K8s ML endpoints.', 'If an endpoint receives < 10 requests per hour, configure it to spin down to zero instances when idle.', 'Note: you will incur a 2-second cold start penalty. Ensure the product UX can mask this delay.'],
            {
                question: 'Why is running continuous Machine Learning Inference on premium Training GPUs (like A100s) an economic mistake?',
                options: ['Training GPUs are too slow for real-time requests', 'Training GPUs generate too much heat for cloud servers', 'Premium GPUs have massive per-hour costs designed for heavy batched math; using them to serve single user requests is massive financial overkill', 'It violates NVIDIA licensing'],
                correctIndex: 2,
                explanation: 'Inference requires a fraction of the compute power of Training. You do not need a multi-thousand-dollar GPU array to serve a standard classification endpoint to a user. Cheap CPUs or T4 GPUs handle inference perfectly at a massive discount.'
            }
        )
    ], '/vault/curriculum/tracks/data-economics/8-6', undefined, 'live'
);

tracks8Modules['data-economics/8-6'] = m('8-6', 'Data Governance Investment', 'Quantifying the ROI of Data Catalogs, automated lineaging, and metadata management.', t8, 
    ['Evaluate Data Catalog platforms', 'Map data lineage for incident response', 'Establish automated access control'], [
        l('The Value of Data Lineage', 
            [
                'When a CEO detects a $500,000 discrepancy on the board dashboard, an analyst must manually track that final number back through 4 layers of SQL views, 2 data warehouses, and the original Salesforce API. This process takes 3 days.',
                'Data Lineage tools visually map exactly how a piece of data flowed from origin to the final chart. This transforms a 3-day panic attack into a 5-minute root-cause diagnosis.',
                'A Data Catalog (e.g. Alation, Collibra) without automated Data Lineage is just a rotting wiki. Lineage is the feature that provides the actual ROI.'
            ],
            [
                d('Trust Depreciation', 'The loss of executive confidence when a dashboard is repeatedly proven wrong.', 'Once lost, takes 6-12 months to rebuild'),
                d('Root Cause Diagnosis Time', 'The engineering hours required to trace a bad dashboard metric directly back to the source bug.', 'Post-Lineage Target: < 15 minutes')
            ],
            'Install an automated lineage hook for your data warehouse.',
            ['If using dbt, enable dbt Docs and the built-in lineage graph.', 'If enterprise, evaluate Monte Carlo or Datafold to auto-parse your SQL history.', 'Use the resulting graph to instantly spot "choke-point" tables that feed 90% of your company reporting.'],
            {
                question: 'Why is automated Data Lineage critical for Enterprise Data Governance?',
                options: ['It makes the data process faster', 'It provides an instant visual map tracing how an error at the data source propagated through transformations all the way to the executive dashboard, slashing debugging time', 'It automatically repairs broken data', 'It replaces the need for Data Analysts'],
                correctIndex: 1,
                explanation: 'Finding where a metric broke in a massive modern data stack is a needle in a haystack. Lineage acts as a map, showing exactly which transformation pipeline corrupted the data, allowing immediate remediation.'
            }
        )
    ], '/vault/curriculum/tracks/data-economics/8-7', undefined, 'live'
);

tracks8Modules['data-economics/8-7'] = m('8-7', 'Real-Time Analytics', 'The massive premium associated with streaming data (Kafka/Kinesis) vs batch processing.', t8, 
    ['Determine Real-Time necessity', 'Cost Kafka clusters vs SQS', 'Calculate sub-second premium'], [
        l('The Sub-Second Premium', 
            [
                'Everyone says they want "Real-Time Dashboards." 95% of businesses do not need them. Real-Time infrastructure (Kafka, Flink, highly-available streaming clusters) costs 10x to 50x more than nightly batch processing.',
                'The economic question is not "can we build real-time?" The question is: "Will the business literally act on this data within 5 seconds?" If the marketing team only views the dashboard once a week, building sub-second streaming pipelines is a scandalous waste of money.',
                'Push back aggressively on "Real Time" requests. Offer "Micro-Batching" (updating every 15 minutes) as an alternative that delivers 99% of the perceived user value at 10% of the cost.'
            ],
            [
                d('The Real-Time Tax', 'The multiplicative infrastructure cost of maintaining "always-on" event streams vs localized batch jobs.', 'Typically 10x steeper infrastructure bill'),
                d('Actionability Window', 'The time interval within which a human or system will actually react to the new data.', 'If > 1 hour, use batch.')
            ],
            'Audit your engineering backlog for "Real-Time" or "Streaming" requests.',
            ['For every request, ask the stakeholder: "If this data arrived 5 minutes late, what specifically would break in your operations?"', 'If the answer is nothing, downgrade the request to a 5-minute CRON batch job.', 'Reserve Kafka and pure streaming strictly for systemic triggers (e.g. fraud detection, High-Frequency Trading).'],
            {
                question: 'What is the most effective way to drastically reduce Data Engineering infrastructure costs without hurting the business?',
                options: ['Switch to a cheaper cloud provider', 'Downgrade "Real-Time" dashboard requests to 15-minute "Micro-Batches" when human stakeholders cannot physically react to sub-second data anyway', 'Fire junior data engineers', 'Stop paying for data warehouse software'],
                correctIndex: 1,
                explanation: 'Real-time streaming pipelines require highly available, costly message brokers. If the consumer of the data is a human looking at a screen, a 15-minute delay is imperceptible to their workflow but saves the company millions in compute.'
            }
        )
    ], '/vault/curriculum/tracks/data-economics/8-8', undefined, 'live'
);

tracks8Modules['data-economics/8-8'] = m('8-8', 'Data Lake Strategy', 'Calculating the economics of Lakehouse architectures vs pure Data Warehouses.', t8, 
    ['Compare Schema-on-Read vs Schema-on-Write', 'Evaluate Databricks Lakehouse ROI', 'Optimize raw S3 storage'], [
        l('The Economics of Schema-on-Read', 
            [
                'Traditional Data Warehouses require you to structure the data perfectly before you load it (Schema-on-Write). This requires heavy upfront engineering investment just to see if the data is useful.',
                'Data Lakes (S3 buckets full of Parquet files) use Schema-on-Read. You dump raw data cheaply ($0.02/GB), and only apply expensive parsing logic if an analyst actively queries it. This defers the engineering cost until the exact moment value is requested.',
                'The "Lakehouse" pattern (Databricks) combines cheap S3 storage with Warehouse-level performance, creating the optimal balance of deferred engineering cost and rapid analytical retrieval.'
            ],
            [
                d('Deferred Engineering Cost', 'Dumping raw data to S3 without structuring it, saving pipeline creation time until demand exists.', 'Massive velocity gain for Data Engineering'),
                d('Parquet Optimization', 'A columnar storage format that makes raw S3 files 10x to 100x cheaper to scan than raw JSON.', 'Mandatory for Data Lake survival')
            ],
            'Implement a Parquet conversion layer for your raw logs.',
            ['If you are currently dumping raw JSON or CSV logs into S3 for long term storage, you are actively burning money on storage volume.', 'Add a lightweight Lambda function or Firehose to compress those streams into Parquet format.', 'This alone will slash long-term analytics storage bills by up to 80%.'],
            {
                question: 'What is the primary economic advantage of a "Data Lake" architecture over a traditional "Data Warehouse"?',
                options: ['The data runs faster', 'You defer the expensive engineering cost of structuring the data upfront, instead storing it securely on cheap storage until business value is actually requested', 'Data Lakes natively comply with GDPR privacy regulations', 'It requires zero SQL knowledge'],
                correctIndex: 1,
                explanation: 'A Data Warehouse forces you to pay Data Engineers to heavily prepare data before it enters. A Lake allows you to cheaply store raw data, pushing the cost of organizing it into the future when (and if) the data is needed.'
            }
        )
    ], '/vault/curriculum/tracks/data-economics/8-9', undefined, 'live'
);

// Continuing straight through to 8-15
tracks8Modules['data-economics/8-9'] = m('8-9', 'Business Intelligence ROI', 'Navigating Dashboard Proliferation, BI Seat Licensing (Tableau/Looker), and actionability.', t8, 
    ['Audit BI Seat Licensing', 'Combat Dashboard Sprawl', 'Enforce actionable metric creation'], [
        l('Dashboard Proliferation Analytics', 
            [
                'A standard Enterprise has more Looker or Tableau dashboards than it has employees. This indicates massive organizational waste. A dashboard without a clear, intended operational action is just expensive digital art.',
                'When you have 50 dashboards reporting slightly different daily revenue numbers, executive alignment disintegrates. "Single Source of Truth" is an economic imperative, not a buzzword.',
                'BI Seat licenses ($50-100/mo/user) stack up aggressively. If a user has not logged into Tableau in 60 days, auto-harvesting that license saves $1,000 annually per ghost seat.'
            ],
            [
                 // Intentional minimal definitions
            ],
            'Execute a BI License harvesting script.',
            ['Query the API of your BI tool (Looker/PowerBI) for user "Last Login" timestamps.', 'Generate a CSV of users > 60 days inactive.', 'Suspend those licenses immediately to claw back OPEX budget.']
        )
    ], '/vault/curriculum/tracks/data-economics/8-10', undefined, 'live'
);

tracks8Modules['data-economics/8-10'] = m('8-10', 'Customer Data Platform (CDP)', 'The cost of Identity Resolution and whether bridging marketing data to product data requires Segment/mParticle.', t8, 
    ['Calculate CDP implementation costs', 'Map unified customer identities', 'Assess Composable vs Packaged CDPs'], [
        l('The CDP Integration Trap', 
            [
                'A Customer Data Platform (CDP) like Segment promises to unify user data and easily syndicate it to 50 marketing tools. The reality: implementation takes 6-9 months, generates massive engineering friction, and costs $60k+ annually.',
                'Before buying a CDP, question the marketing team. Do they actually use 10 different target destinations, or do they just send an email via HubSpot and run ads on Facebook? If the destination count is low, point-to-point webhook integrations are significantly cheaper.',
                'Modern architectures favor the "Composable CDP"  -  turning your existing Snowflake/BigQuery warehouse into the CDP engine via Reverse ETL tools like Hightouch, avoiding the massively overpriced CDP data storage tax.'
            ],
            [
                d('Identity Resolution Friction', 'The engineering difficulty of stitching a mobile anonymous ID to a logged-in web ID.', 'Requires complex graph logic'),
                d('Reverse ETL Arbitrage', 'Using cheap tools to push Warehouse data into Salesforce rather than paying a CDP to store duplicate data.', 'Saves 50% relative to monolithic CDPs')
            ],
            'Prevent the monolithic CDP buy using the Composable CDP model.',
            ['When marketing requests a $60k Segment/mParticle contract to push data to HubSpot, intervene.', 'Propose buying a $10k Reverse ETL tool (Hightouch/Census) to directly push validated Data Warehouse models directly to HubSpot instead.', 'You just saved the company $50,000 and prevented redundant data storage silos.']
        )
    ], '/vault/curriculum/tracks/data-economics/8-11', undefined, 'live'
);

tracks8Modules['data-economics/8-11'] = m('8-11', 'Data Engineering Productivity', 'Calculating the ROI of dbt, semantic layers, and automated data testing frameworks.', t8, 
    ['Quantify dbt developer velocity', 'Build Semantic Layers', 'Enforce CI/CD for Data'], [
        l('Data as Code (dbt Economics)', 
            [
                'Before dbt, Data Engineers used clunky drag-and-drop GUI tools or massive block SQL scripts hooked to CRON jobs. It was untestable, un-version-controlled, and broke constantly.',
                'dbt (Data Build Tool) brought software engineering best practices (Version Control, CI/CD, Automated Testing) to the analytics layer. This shift prevents broken data from ever reaching production.',
                'The ROI of dbt is measured in "Analyst Confidence" and "Fewer Support Tickets." If an analyst trusts the data, they make fast decisions. If they doubt it, they spend 3 days rewriting their own manual verification queries.'
            ],
            [
                 // Intentional minimal definitions
            ],
            'Lock down your production database against manual SQL edits.',
            ['Ensure no human (even the Lead Data Engineer) has write-access to the production reporting schemas.', 'Enforce that 100% of data transformations must happen via a Git Pull Request using dbt.', 'This eliminates "rogue data" mutations that quietly corrupt executive reports.']
        )
    ], '/vault/curriculum/tracks/data-economics/8-12', undefined, 'live'
);

tracks8Modules['data-economics/8-12'] = m('8-12', 'Feature Store Economics', 'Evaluating Feature Stores (Tecton, Feast) for ML engineering velocity.', t8, 
    ['Understand Offline vs Online feature sharing', 'Prevent training-serving skew', 'Reduce redundant ML engineering'], [
        l('The Cost of ML Feature Duplication', 
            [
                'When multiple data science teams try to predict churn, they will all independently write complex SQL to calculate "User Logins in Last 30 Days." This redundant engineering costs hundreds of thousands in payroll.',
                'A Feature Store centralizes these mathematical definitions. Team A calculates it once, pushes it to the store, and Team B can instantly pull it via API for their models.',
                'Furthermore, Feature Stores solve "Training-Serving Skew" - ensuring the offline historical data used to train the model exactly matches the real-time online data the model sees in production. Skew silently kills model accuracy.'
            ],
            [],
            'Evaluate your ML organization for Feature Store readiness.',
            ['If you have 1 active model, a Feature Store is overkill. Use standard SQL.', 'If you have > 5 models attempting to predict different attributes over the same core user demographic, a Feature Store will immediately reclaim 30% of your Data Scientists\' data-prep time.']
        )
    ], '/vault/curriculum/tracks/data-economics/8-13', undefined, 'live'
);

tracks8Modules['data-economics/8-13'] = m('8-13', 'Data Privacy & Compliance', 'Assessing the strict financial overhead of GDPR, Anonymization protocols, and the Right to Deletion.', t8, 
    ['Model Data Deletion architecture', 'Assess Anonymization compute', 'Track cross-border PII'], [
        l('Engineering for Deletion', 
            [
                'The core architecture of most databases ensures data lives forever. The GDPR "Right to Be Forgotten" fundamentally breaks monolithic relational database architectures. Deleting a single user cascading across 40 complex tables usually brings the database down.',
                'The modern compliance solution is Crypto-Shredding: encrypting user PII with an individual unique master key. When a user requests deletion, you simply delete the key. The data remains in the database, but is mathematically transformed into permanent, unreadable garbage.',
                'This eliminates the need for massive DELETE cascaded queries, instantly satisfying GDPR requests programmatically.'
            ],
            [
                d('Crypto-Shredding', 'Deleting the encryption key rather than the raw database row.', 'Fast, automated, and mathematically absolute deletion compliance.')
            ],
            'Audit your Data Subject Access Request (DSAR) protocol to evaluate crypto-shredding viability.'
        )
    ], '/vault/curriculum/tracks/data-economics/8-14', undefined, 'live'
);

tracks8Modules['data-economics/8-14'] = m('8-14', 'Data Monetization', 'Transforming internal data exhaust into secondary Data-as-a-Product revenue streams.', t8, 
    ['Abstract raw data into API products', 'Price B2B Data Feeds', 'Maintain data exclusivity models'], [
        l('Data as an Enterprise Product', 
            [
                'Companies often sit on petabytes of anonymized "exhaust data" that hedge funds, marketing syndicates, and AI developers will happily pay millions for. Selling validated, sanitized data streams is the highest-margin activity a company can undertake (~95% margin).',
                'The economic rule of Data Monetization: Raw data has low value. Structured, historically mapped, clean data has massive premium value. Do not sell raw dumps; sell organized APIs.',
                'Warning: You must architect rigorous anonymization and legal air-gaps to ensure selling data does not violate primary user privacy agreements or trigger FTC audits.'
            ],
            [],
            'Assess your exhaust data for B2B monetization feasibility.'
        )
    ], '/vault/curriculum/tracks/data-economics/8-15', undefined, 'live'
);

tracks8Modules['data-economics/8-15'] = m('8-15', 'Data Economics Synthesis', 'The final capstone aligning Snowflake OPEX, Data Team payroll, and BI Actionability into a unified Data P&L.', t8, 
    ['Finalize unified Data TCO', 'Synthesize pipeline limits', 'Build the final Data Executive brief'], [
        l('The Office of the Chief Data Officer', 
            [
                'Data is no longer a sub-department of IT; it is the central nervous system of modern enterprise operations. The Chief Data Officer (CDO) must manage a distinct P&L: the total cost of storage and compute vs. the net-revenue yield of analytical actions.',
                'Success heavily relies on governing consumption. An ungoverned warehouse will scale cloud bills to the moon while delivering static dashboards to disconnected executives.',
                'The ultimate state of mastery is achieving a negative net-capital cost for data: when the operational efficiencies discovered by data models (e.g. automating supply chain ordering) mathematically exceed the annual budget of the entire Data Engineering and Analytics organization.'
            ],
            [
                d('Data TCO (Total Cost of Ownership)', 'The sum total of Cloud Storage, Warehouse Compute, Tool Licensing (dbt/Fivetran/Looker), and Data Team Payroll.', 'The numerator in your ROI calculation'),
                d('Analytic Yield', 'The measurable financial impact of decisions explicitly generated by the data team.', 'The denominator. Hard to track, mandatory to prove.')
            ],
            'Present your total Data TCO to executive leadership.',
            ['Calculate your exact Data TCO for the previous calendar year.', 'Identify the top 3 largest revenue-saving or revenue-generating decisions made purely due to an analytical insight during that same period.', 'Determine if your analytic yield cleared the hurdle rate of the total TCO.']
        )
    ], undefined, undefined, 'live'
);
