import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
// import { Typography } from 'antd';
// import { useIntl } from 'umi';
import { Card, Alert, Typography } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import styles from './Welcome.less';

const CodePreview: React.FC = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

const Welcome: React.FC = () => {
  const intl = useIntl();

  return (
    <PageContainer>
      <h1>hello 狗子哥</h1>
      <Card>
        <Alert
          // message={intl.formatMessage({
          //   id: 'pages.welcome.alertMessage',
          //   defaultMessage: 'default message 默认消息',
          // })}
          message="提示消息"
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 24,
          }}
        />
        <Typography.Text strong>
          {/* <FormattedMessage id="pages.welcome.advancedComponent" defaultMessage="Advanced Form" />{' '} */}
          <a href="https://google.com" rel="noopener noreferrer" target="__blank">
            <FormattedMessage id="pages.welcome.link" defaultMessage="有事谷歌" />
          </a>
        </Typography.Text>
        <CodePreview>yarn add @ant-design/pro-table</CodePreview>
        <Typography.Text
          strong
          style={{
            marginBottom: 12,
          }}
        >
          <FormattedMessage id="pages.welcome.advancedLayout" defaultMessage="Advanced layout" />{' '}
          <a
            href="https://procomponents.ant.design/components/layout"
            rel="noopener noreferrer"
            target="__blank"
          >
            <FormattedMessage id="pages.welcome.link" defaultMessage="Welcome" />
          </a>
        </Typography.Text>
        <CodePreview>yarn add @ant-design/pro-layout</CodePreview>
      </Card>
    </PageContainer>
  );
};

export default Welcome;
