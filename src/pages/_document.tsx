import { Head, Html, Main, NextScript } from 'next/document';

import { DocumentHeadTags, documentGetInitialProps, DocumentHeadTagsProps } from '@mui/material-nextjs/v14-pagesRouter';

export default function MyDocument(props: DocumentHeadTagsProps) {
    return (
        <Html lang="en">
            <Head>
                <DocumentHeadTags {...props} />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@600;700&family=Rubik+Doodle+Triangles&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

MyDocument.getInitialProps = documentGetInitialProps;