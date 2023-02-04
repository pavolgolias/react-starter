import { type ReactNode, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Layout, Row, Col, Space } from 'antd';
import { css } from '@emotion/react';

import { ThemeSwitch } from 'app/theme';
import { Navbar, Logo } from 'common/components';
import { createStyles, getMQ } from 'common/styleUtils';

import { AUTH_ROUTES } from '../../routes';

type Props = {
  children: ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  const { t } = useTranslation();

  const menuItems = useMemo(
    () =>
      [
        {
          to: AUTH_ROUTES.login.to,
          label: t('auth:menu.login'),
        },
        {
          to: AUTH_ROUTES.signUp.to,
          label: t('auth:menu.signUp'),
        },
      ].map(({ to, label }) => ({
        key: to,
        label: <Link to={to}>{label}</Link>,
      })),
    [t]
  );

  return (
    <Layout css={styles.layout}>
      <Layout.Header css={styles.header}>
        <Row justify="space-between" wrap={false}>
          <Col>
            <Logo to={AUTH_ROUTES.login.to} />
          </Col>
          <Col>
            <Space size="large">
              <ThemeSwitch />
              <Navbar items={menuItems} mobileMenuBreakpoint="md" />
            </Space>
          </Col>
        </Row>
      </Layout.Header>
      <Layout.Content css={styles.content}>{children}</Layout.Content>
    </Layout>
  );
};

export default AuthLayout;

const styles = createStyles({
  layout: css({
    minHeight: '100vh',
  }),

  header: ({ token, isDark }) =>
    css({
      position: 'sticky',
      top: 0,
      boxShadow: token.boxShadow,
      zIndex: 19,

      '&&': {
        background: isDark ? undefined : token.colorBgContainer,
        paddingInline: token.paddingLG,

        [getMQ(token).smMax]: {
          paddingInline: token.paddingSM,
        },
      },
    }),

  content: ({ token }) =>
    css({
      display: 'grid',
      height: '100%',
      padding: token.paddingLG,

      [getMQ(token).smMax]: {
        padding: token.paddingSM,
      },

      '.ant-form': {
        width: '100%',
        maxWidth: 400,
        margin: 'auto',
      },
    }),
});
