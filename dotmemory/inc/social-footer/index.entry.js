import React from 'react';
import { SocialFooter } from 'common-ui/components/social-footer/social-footer';
import safeReactRender from 'utils/safe-react-render';

import { t } from '@lingui/macro';

import i18n from '../../../../ui/i18n';

safeReactRender(
  <SocialFooter
    socialLinks={[
      {
        href:
          '//dotnettools-support.jetbrains.com/hc/en-us/community/topics/200379845-dotMemory',
        type: 'forum'
      },
      {
        href: '//youtrack.jetbrains.com/issues/DMRY',
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
        href: '//twitter.com/dotmemory',
        type: 'twitter',
        text: i18n._(t`@dotmemory on Twitter`)
      }
    ]}
  />,
  'social-footer'
);
