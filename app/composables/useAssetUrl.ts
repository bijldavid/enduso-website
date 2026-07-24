import { joinURL } from 'ufo'

export function useAssetUrl() {
    const config = useRuntimeConfig()

    function assetUrl(path: string): string {
        return joinURL(config.app.baseURL, path)
    }

    return {
        assetUrl,
    }
}