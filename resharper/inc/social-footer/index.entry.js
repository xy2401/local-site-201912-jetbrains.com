import React from 'react';
import { SocialFooter } from 'common-ui/components/social-footer/social-footer';
import safeReactRender from 'utils/safe-react-render';

import { t } from '@lingui/macro';

import i18n from '../../../../ui/i18n';

safeReactRender(
  <SocialFooter
    socialLinks={[
      {
        href: '//resharper-support.jetbrains.com/hc/en-us/community/topics',
        type: 'forum'
      },
      {
        href: '//youtrack.jetbrains.com/issues/RSRP',
        type: 'bug'
      },
      {
        href: '//blog.jetbrains.com/dotnet/',
        type: 'blog',
        text: i18n._(t`.NET Tools blog`)
      }
    ]}
    socialNetworksLinks={[
      {
        href: '//twitter.com/resharper',
        type: 'twitter',
        text: i18n._(t`@resharper on Twitter`)
      }
    ]}
  />,
  'social-footer'
);
