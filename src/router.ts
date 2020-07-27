import {o} from 'sinuous'
import Router from 'vanilla-router'

const currentNode = o(<Node>document.createComment(''))

export const router = new Router(
    {
        mode: 'history',
        page404: async (path) => {
            const { NotFound } = await import('./notFound')
            currentNode(NotFound())
        }
    }
)

export function add(path:string, cb: ( ... params: string[]) => void) {
    router.add(path, async (...params) => {
        currentNode(await cb.apply({}, params))
    })

}

export function resolve() {
    return currentNode
}

export function activate() {
    router.addUriListener()
    router.check()
}

export function navigateTo(newPath) {
    router.navigateTo(newPath);
}