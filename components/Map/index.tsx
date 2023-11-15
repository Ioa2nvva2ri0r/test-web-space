"use client";

import React from "react";
// Components
import Form from "../Form";
// Yandex-map
import { YMaps, Map } from "react-yandex-maps";
// Styles
import styles from "./map.module.scss";

const MapElem: React.FC = () => {
  const mapOptions = {
    suppressMapOpenBlock: true,
    suppressObsoleteBrowserNotifier: true,
    yandexMapDisablePoiInteractivity: true,
    yandexMapAutoSwitchBehavior: true,
    yandexMapDisableHotkeys: true,
  };

  return (
    <section className={styles.map__container}>
      <YMaps>
        <Map
          className={styles.map}
          defaultState={{
            center: [53.897491757579516, 27.569602765625],
            zoom: 15,
          }}
          options={mapOptions}
        />
      </YMaps>
      <Form />
    </section>
  );
};

export default MapElem;
