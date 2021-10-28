import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled';

interface PostContentProps {
    html: string
}

const MarkdownRenderer = styled.div`
    display: flex;
    flex-direction: column;
    width: 768px;
    margin: 0 auto;
    padding: 100px 0;
    padding: 100px 0;
    word-break: break-all;

    //Markdown Style
    line-height: 1.8;
    font-size: 16px;
    font-weight: 400;

    // Apply Padding Attribute to All Elements
    p {
        padding: 3px 0;
    }

    // Adjust Heading Element Style
    h1,
    h2,
    h3 {
        font-weight: 800;
        margin-bottom: 30px;
    }

    hr + h1,
    hr + h2,
    hr + h3 {
        margin-top: 0;
    }

    h1 {
        font-size: 30px;
    }

    h2 {
        font-size: 25px;
    }

    h3 {
        font-size: 20px;
    }

    // Adjust List Element Style
    ol,
    ul {
        margin-left: 20px;
        padding: 30px 0;
    }

    //Adjust Code Style
    pre[class*='language-']{
        margin: 30px 0;
        padding: 15px;
        font-size: 15px;

        ::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.5);
            border-radius: 3px;
        }
    }


    code[class*='language-'],
    pre[class*='language-']{
        tab-size: 2;
    }
`

const PostContent: FunctionComponent<PostContentProps> = function ({html}){
    return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html}}/>
}

export default PostContent