import React from "react"
import ZigZag from "./ZigZag"
import { useModal } from "../hooks/useModal"
import Card from "./Card"
import { useOutsideClickRef } from "rooks"
import Button from "./Button"

const Footer = () => {
  const { modals, open, close } = useModal()

  const [modalContentRef] = useOutsideClickRef(() => {
    if (modals.length) close()
  }, !!modals.length)

  const openDisclaimer = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault()
    open(
      <>
        <Card
          ref={modalContentRef}
          className="max-w-[90%] flex flex-col gap-y-5 my-[20%] translate-y-[15%]"
          color="green"
        >
          <h2 className="font-medium text-16pGreen text-center text-3xl">
            Disclaimer
          </h2>
          <p>
            The "16personalities-api" is an unoffcial backend as a service
            (BaaS) developed independently by Swapnil Soni, an open-source
            developer, and is not affiliated with or endorsed by the official
            website "16personalities.com" or its parent company. While every
            effort has been made to ensure the accuracy and reliability of the
            data and services provided through this API, I cannot guarantee its
            completeness or correctness.{" "}
          </p>
          <p>
            Users of the "16personalities-api" are advised to use the service
            responsibly and in compliance with the terms of use and privacy
            policies of both the "16personalities-api" service and
            "16personalities.com". This API is provided on an "as-is" and
            "as-available" basis, without any warranties or representations,
            express or implied.
          </p>
          <p>
            {" "}
            I, Swapnil Soni, shall not be liable for any direct, indirect,
            incidental, special, consequential, or punitive damages arising out
            of the use or inability to use the "16personalities-api", including
            but not limited to damages for loss of profits, data, or goodwill.
          </p>{" "}
          <p>
            By using the "16personalities-api", you agree to indemnify and hold
            me harmless from any claims, damages, liabilities, losses, and
            expenses (including legal fees) arising out of or in connection with
            your use of the API.
          </p>
          <p>
            {" "}
            I reserve the right to modify, suspend, or discontinue the
            "16personalities-api" service at any time without prior notice.
            Continued use of the service after any such modifications shall
            constitute your consent to such changes.
          </p>{" "}
          <p>
            Please note that accessing user data through this API may be subject
            to legal restrictions and privacy regulations. It is the
            responsibility of the user to ensure compliance with applicable laws
            and regulations when using the "16personalities-api" for accessing
            or processing personal data.
          </p>{" "}
          <p>
            If you are an owner or representative of 16personalities.com and
            have any objections to the "16personalities-api", please reach out
            to me via email through my GitHub profile. Your concerns will be
            addressed promptly.
          </p>
          <p>
            {" "}
            By using the "16personalities-api", you acknowledge and agree to
            abide by the terms and conditions outlined in this disclaimer. If
            you do not agree with these terms, you should refrain from using the
            API.
          </p>{" "}
          <p>
            Thank you for your understanding and cooperation. I hope you find
            the "16personalities-api" useful and enjoyable to use. If you have
            any questions, feedback, or suggestions for improvement, please feel
            free to contact me. I appreciate your support and feedback.
          </p>{" "}
          <p>Best regards, Swapnil Soni</p>
          <Button
            color="green"
            className="w-min self-end"
            onClick={() => close()}
          >
            Close
          </Button>
        </Card>
      </>
    )
  }

  return (
    <footer className="relative">
      <ZigZag className="-scale-y-100 absolute -top-full h-20" />
      <div className="flex flex-col mt-6 pb-3">
        <small className="text-center text-gray-800">
          Created by Swapnil Soni
        </small>
        <div className="bg-white text-black flex gap-x-4 justify-center">
          <a
            href="https://16personalities.com"
            className="link font-medium "
            target="_blank"
          >
            16Personalities Official Website
          </a>
          <a
            href="https://github.com/SwapnilSoni1999/16personalities-api"
            className="link font-medium "
            target="_blank"
          >
            Github
          </a>
          <a
            href="#disclaimer"
            className="link font-medium "
            target="_blank"
            onClick={openDisclaimer}
          >
            Disclaimer
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
