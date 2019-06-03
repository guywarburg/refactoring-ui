import { observable, computed, action } from 'mobx';
import { IFetch } from './fetch';

interface ICurrentView {
  name: string;
  [k: string]: any;
}

class ViewStore {
  fetch: IFetch | null = null;

  @observable currentView: ICurrentView | null = { name: '/' };

  constructor(fetch: IFetch) {
    this.fetch = fetch;
  }

  @computed get currentPath(): string {
    if (!this.currentView) {
      return '/';
    }
    switch (this.currentView.name) {
      case 'wppusher':
        return '/wppusher/';
      case 'home':
        return '/';
      default:
        return '/';
    }
  }

  @action showBase = () => {
    this.currentView = {
      name: 'home',
      availablePages: [
        {
          name: 'wppusher',
          imgPath: '/',
          details:
            'a elegantly designed checkout form for with react hooks as a data layer'
        }
      ]
    };
  };

  @action showWPPusher = () => {
    this.currentView = {
      name: 'wppusher'
    };
  };
}

export default ViewStore;
