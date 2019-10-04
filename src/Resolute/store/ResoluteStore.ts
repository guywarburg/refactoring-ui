import { observable, computed, action } from 'mobx';
import { fromPromise } from 'mobx-utils';
import { IFetch } from './fetch';

interface ICurrentView {
  name: string;
  [k: string]: any;
}

export class ResoluteStore {
  fetch: IFetch | null = null;

  @observable breadcrumbs = ['contacts', 'bart simpson', 'properties'];

  @observable headerData = {};

  constructor(fetch: IFetch) {
    this.fetch = fetch;
  }

  @computed get getBreadcrumbsForPage() {
    return this.breadcrumbs;
  }

  @computed get pageData() {
    return this.headerData;
  }

  @action loadProperties() {
    this.loadHeaderData();
  }

  @action loadHeaderData() {
    if (this.fetch) {
      this.headerData = fromPromise(this.fetch('/pageHeader'));
    }
  }
}
