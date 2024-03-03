import React from 'react'

type Props = {}

const Timeline = (props: Props) => {
    return (
        <div>
            <ol className="relative border-s border-gray-200 dark:border-gray-700 ms-32">
                <li className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg className="w-2.5 h-2.5  dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Senior Data Analyst <span className="bg-blue-100  text-sm font-medium me-2 px-2.5 py-0.5 rounded text-blue-800 dark:bg-blue-900 dark:text-blue-300 ms-3">Current</span></h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Tiger Analytics · Full-time · Apr 2022</time>
                    <ul className="mb-4 text-base font-normal text-gray-500 list-disc pl-4">
                        <li>
                            Led the development of a Pricing Recommendation Engine, resulting in a 10% revenue increase through the implementation of strategic pricing aligned with market trends and customer behavior. Oversaw the entire project lifecycle, achieving seamless integration of the engine into retailer operations and reducing project completion time by 15%.
                        </li>
                        <li>
                            Innovated a Lasso regression-driven feature selection module, boosting predictive accuracy by 20%.
                        </li>
                        <li>
                            Expertly constructed and fine-tuned predictive models, leveraging Lasso, XGBoost, and Bayesian techniques, resulting in a 12% enhancement in pricing outcome forecasting.
                        </li>
                        <li>
                            Orchestrated end-to-end project execution, ensuring successful deployment and achieving a 20% reduction in project completion time.
                        </li>
                        <li>
                            Engineered an interactive UI with Dash and Plotly, streamlining user interaction and resulting in a 30% increase in user engagement.
                        </li>
                        <li>
                            Implemented rigorous data preprocessing, reducing data anomalies by 25% and enhancing model accuracy.
                        </li>
                        <li>
                            Designed and implemented a hybrid modeling framework, combining stacked classification and linear regression techniques, resulting in a 15% improvement in budget estimation accuracy.
                        </li>
                    </ul>
                </li>
                <li className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg className="w-2.5 h-2.5  dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Software Deveoper</h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Tata Consultancy services · Full-time · Jan 2021 - Mar 2022</time>
                    <ul className="mb-4 text-base font-normal text-gray-500 list-disc pl-4">
                        <li>
                            Designed and developed a dedicated socket module that facilitated real-time communication and reduced latency by 50% within the application.
                        </li>
                        <li>
                            Played a key role in integrating multiple external APIs into the application. By seamlessly connecting these APIs with the application’s features.
                        </li>
                        <li>
                            Provided project updates to leadership team of 3.
                        </li>
                        <li>
                            Communicated with internal teams and stakeholders, working to determine solutions for the user experience.
                        </li>
                    </ul>
                </li>
            </ol>

        </div>
    )
}

export default Timeline