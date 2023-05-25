import { type Props } from '../routers/index'
import { QRCode } from './QRCode'

export const Messages = ({ type, url, protocol }: Props) => (
  <div>
    {type === 'ok' ? (
      <div class="flash flash-full flash-success py-2 pl-3 pr-2 border-0 border-top">
        <section class="d-flex flex-items-start mt-1 mb-2">
          <span class="octicon">
            <iconify-icon width="16" height="18" icon="octicon:check-16" />
          </span>
          <span class="overflow-hidden">
            <span class="mr-1">已重定向到</span>
            <span class="Truncate">
              <a
                class="Link Truncate-text Truncate-text--expandable"
                target="_blank"
                href={`//${url}`}
              >
                <strong class="text-medium">{url}</strong>
              </a>
            </span>
          </span>
        </section>
        <section class="d-flex flex-items-center flex-justify-end my-1">
          <button
            class="btn-octicon btn-sm color-fg-default text-sm"
            type="button"
            aria-label="复制链接"
            onclick={`navigator.clipboard.writeText('${protocol}//${url}')`}
          >
            <span class="octicon">
              <iconify-icon width="14" height="14" icon="octicon:copy-16" />
            </span>{' '}
            复制
          </button>

          <details class="details-overlay details-overlay-dark">
            <summary
              class="btn-octicon btn-sm mr-1 color-fg-default text-sm"
              type="button"
              aria-label="二维码"
            >
              <span class="octicon">
                <iconify-icon
                  width="14"
                  height="14"
                  icon="octicon:devices-16"
                />
              </span>{' '}
              二维码
            </summary>
            <aside class="Box color-shadow-extra-large">
              <QRCode url={url} protocol={protocol} />
            </aside>
          </details>
        </section>
      </div>
    ) : type === 'error' ? (
      <div class="flash flash-full flash-warn py-2 border-0 border-top">
        <section class="d-flex flex-items-center my-1">
          <span class="octicon">
            <iconify-icon width="16" height="18" icon="octicon:x-16" />
          </span>
          <span>重定向失败，请稍后再试</span>
        </section>
      </div>
    ) : null}
  </div>
)
