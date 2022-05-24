import React, { Suspense, lazy } from 'react';
import type { RouteObject } from 'react-router-dom';
import { DocumentTitle } from '@wcj/tools-react-components';
import Layout from './app/Layout';
import { NoMatch } from './app/NoMatch';
import { Loading } from './app/Loading';

interface LoadableProps {
  title?: string;
}

const Loadable =
  (Component: React.LazyExoticComponent<() => JSX.Element>) =>
  ({ title, ...props }: LoadableProps) => {
    return (
      <DocumentTitle title={title}>
        <Suspense fallback={<Loading />}>
          <Component />
        </Suspense>
      </DocumentTitle>
    );
  };

// @ts-ignore
const HomePage = Loadable(lazy(() => import('./app/Home')));
// @ts-ignore
const UrlEncode = Loadable(lazy(() => import('@wcj/tools-react-url-encode')));
const TextCase = Loadable(lazy(() => import('@wcj/tools-react-text-case')));
const JSONFormat = Loadable(lazy(() => import('@wcj/tools-react-json-format')));
const ImageToBase64 = Loadable(lazy(() => import('@wcj/tools-react-image-to-base64')));

const Hash = Loadable(lazy(() => import('@wcj/tools-react-hash')));
const GeneratePassword = Loadable(lazy(() => import('@wcj/tools-react-generate-password')));
const HtmlToMarkdown = Loadable(lazy(() => import('@wcj/tools-react-html-to-markdown')));
const MarkdownToHtml = Loadable(lazy(() => import('@wcj/tools-react-markdown-to-html')));
const HTMLEscape = Loadable(lazy(() => import('@wcj/tools-react-html-escape')));
const Base64Encoder = Loadable(lazy(() => import('@wcj/tools-react-base64-encoder')));
const QRCodeGenerator = Loadable(lazy(() => import('@wcj/tools-react-qrcode-generator')));
const ChinesePinyinConversion = Loadable(lazy(() => import('@wcj/tools-react-chinese-pinyin-conversion')));
// @ts-ignore
const GenerateGithubBadges = Loadable(lazy(() => import('@wcj/tools-react-generate-github-badges')));
// @ts-ignore
const TomlToJSON = Loadable(lazy(() => import('@wcj/tools-react-toml-to-json')));
// @ts-ignore
const CSSEasingAnimation = Loadable(lazy(() => import('@wcj/tools-react-css-easing-animation')));
// @ts-ignore
const SimpleMarkdownEditor = Loadable(lazy(() => import('@wcj/tools-react-simple-markdown-editor')));
// @ts-ignore
const JWTDecoder = Loadable(lazy(() => import('@wcj/tools-react-jwt-decoder')));
// @ts-ignore
const JSON2Yaml = Loadable(lazy(() => import('@wcj/tools-react-json-yaml')));
// @ts-ignore
const JSON2XML = Loadable(lazy(() => import('@wcj/tools-react-json-xml')));
const PDFToImg = Loadable(lazy(() => import('@wcj/tools-react-pdf-to-img')));
const ExifViewer = Loadable(lazy(() => import('@wcj/tools-react-exif-viewer')));

export let routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage title="Home - Web Tools" />,
      },
      {
        path: 'url-encode',
        element: <UrlEncode title="URL Encoder/Decoder - Web Tools" />,
      },
      {
        path: 'json-format',
        element: <JSONFormat title="JSON Format - Web Tools" />,
      },
      {
        path: 'text-case',
        element: <TextCase title="Text Case - Web Tools" />,
      },
      {
        path: 'image-to-base64',
        element: <ImageToBase64 title="Image To Base64 - Web Tools" />,
      },
      {
        path: 'hash',
        element: <Hash title="Hash - Web Tools" />,
      },
      {
        path: 'generate-password',
        element: <GeneratePassword title="Generate Password - Web Tools" />,
      },
      {
        path: 'html-to-markdown',
        element: <HtmlToMarkdown title="HTML To Markdown - Web Tools" />,
      },
      {
        path: 'markdown-to-html',
        element: <MarkdownToHtml title="Markdown To HTML - Web Tools" />,
      },
      {
        path: 'html-escape',
        element: <HTMLEscape title="HTML Escape/Unescape - Web Tools" />,
      },
      {
        path: 'base64-encoder',
        element: <Base64Encoder title="Base64 Encoder/Decoder Tool - Web Tools" />,
      },
      {
        path: 'qrcode-generator',
        element: <QRCodeGenerator title="QRCode Generator Tool - Web Tools" />,
      },
      {
        path: 'chinese-pinyin-conversion',
        element: <ChinesePinyinConversion title="Chinese Pinyin Conversion Tool - Web Tools" />,
      },
      {
        path: 'generate-github-badges',
        element: <GenerateGithubBadges title="Generate Github Badges Tool - Web Tools" />,
      },
      {
        path: 'toml-to-json',
        element: <TomlToJSON title="Toml To JSON Tool - Web Tools" />,
      },
      {
        path: 'css-easing-animation',
        element: <CSSEasingAnimation title="CSS Easing Animation Tool - Web Tools" />,
      },
      {
        path: 'simple-markdown-editor',
        element: <SimpleMarkdownEditor title="Simple Markdown Editor Tool - Web Tools" />,
      },
      {
        path: 'jwt-decoder',
        element: <JWTDecoder title="JWT Decoder Tool - Web Tools" />,
      },
      {
        path: 'json-yaml',
        element: <JSON2Yaml title="JSON/YAML Converter Tool - Web Tools" />,
      },
      {
        path: 'json-xml',
        element: <JSON2XML title="JSON/XML Converter Tool - Web Tools" />,
      },
      {
        path: 'pdf-to-img',
        element: <PDFToImg title="PDF To Image Tool - Web Tools" />,
      },
      {
        path: 'exif-viewer',
        element: <ExifViewer title="Exif Viewer Tool - Web Tools" />,
      },
      { path: '*', element: <NoMatch /> },
    ],
  },
];
