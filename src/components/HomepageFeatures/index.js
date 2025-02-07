import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '「准确」',
    Svg: require('@site/static/img/bookshelf.svg').default,
    description: (
      <>
        多次检查,避免出错
      </>
    ),
  },
  {
    title: '「快速」',
    Svg: require('@site/static/img/snow.svg').default,
    description: (
      <>
        保持更新!
      </>
    ),
  },
  {
    title: '「丰富」',
    Svg: require('@site/static/img/labtable.svg').default,
    description: (
      <>
        非常多的插件 Wiki
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
