import {extendCypressConfig} from 'cypress/config'
import { playSwrApp} from "./cypress/e2e/swr/playSwrApp.spec.cy";
export * from 'cypress'


export {
    extendCypressConfig,
    playSwrApp
}