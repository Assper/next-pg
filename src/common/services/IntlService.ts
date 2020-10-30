import { ObserverService, State } from './ObserverService'

type Phrases = {
  about: string
  homeLink: string
  aboutLink: string
}

const messages = {
  en: {
    about: 'This is About page!',
    homeLink: 'Home',
    aboutLink: 'About'
  } as Phrases,
  ru: {
    about: 'Это страница О Сайте!',
    homeLink: 'Домой',
    aboutLink: 'О Сайте'
  } as Phrases
}

export enum Locale {
  EN = 'en',
  RU = 'ru'
}

const initial: State = {
  lang: Locale.EN
}

const state: State = initial

export class IntlService extends ObserverService {
  constructor() {
    super()
    this.update(state)
  }

  setLang(lang: string): void {
    state.lang = lang
    this.update({ ...state })
  }

  getMessage(id: keyof Phrases): string {
    const locale = messages[state.lang as Locale]
    return locale[id]
  }

  getState(): State {
    return state
  }
}
