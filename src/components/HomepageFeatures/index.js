import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '准确',
    Svg: require('@site/static/img/labtable.svg').default,
    description: 'PluginsWiki 有完整的翻译工作流,采用 DeepSeek R1 + 人工检查翻译',
  },
  {
    title: '快速',
    Svg: require('@site/static/img/snow.svg').default,
    description: '迅速的翻译你想要的文档,只需要提出 Issue',
  },
  {
    title: '丰富',
    Svg: require('@site/static/img/bookshelf.svg').default,
    description: '有多个插件和服务端核心的文档,丰富全面',
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={styles.featureCard}>
      <div>
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <Heading as="h3" className={styles.featureTitle}>
        {title}
      </Heading>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            欢迎来到 <span className="text--primary">PluginWiki</span>
          </Heading>
          <p className={styles.sectionSubtitle}>
            我们致力于准确,快速,公益的翻译文档
          </p>
        </div>
        
        <div className={styles.featuresInner}>
          <div className={styles.gridContainer}>
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
