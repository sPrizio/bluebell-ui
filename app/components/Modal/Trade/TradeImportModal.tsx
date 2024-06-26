import styles from './TradeImportModal.module.scss'
import BaseModal from "@/app/components/Modal/BaseModal";
import React, {ChangeEvent, useState} from "react";
import FileInput from "@/app/components/Input/File/FileInput";
import BaseMessage from "@/app/components/Message/BaseMessage";
import Link from "next/link";
import {FaFileImport} from "react-icons/fa6";
import {CoreConstants} from "@/app/constants";
import {getAuthHeader} from "@/app/services/configuration/configurationService";

/**
 * Modal for importing trades into the system
 *
 * @param active flag to mark the modal as active
 * @param closeHandler function that closes the modal
 * @author Stephen Prizio
 * @version 0.0.1
 */
function TradeImportModal({active = false, closeHandler}: Readonly<{ active: boolean, closeHandler: Function }>) {

  const baseClass = "trade-import-modal"

  const [isLoading, setIsLoading] = useState(false)
  const [fileInputKey, setFileInputKey] = useState<number>(1)
  const [file, setFile] = useState<File | null>(null)


  //  HANDLER FUNCTIONS

  /**
   * Handles file change
   *
   * @param e change event
   */
  function handleChange(e: ChangeEvent) {
    const target = e.target as HTMLInputElement
    // @ts-ignore
    setFile(target.files[0] ?? null)
  }

  /**
   * Closes the modal and clears the possibly uploaded file
   */
  function closeModal() {
    setFile(null)
    closeHandler()
  }

  /**
   * Handles form submit
   */
  async function handleSubmit() {

    setIsLoading(true)

    if (file) {
      setFileInputKey(Math.random())

      try {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('fileName', file.name);

        await fetch(
        CoreConstants.ApiUrls.Trade.Upload
          .replace('{accountNumber}', CoreConstants.ApiCredentials.TestAccountNumber),
          {
            headers: getAuthHeader(),
            method: 'POST',
            body: formData
          }
      )

        setFile(null)
        window.location.reload()
      } catch (e) {
        console.log(e)
      }
    }

    setIsLoading(false)
  }


  //  RENDER

  let content =
    <section className={styles[baseClass]}>
      <p>
        Keep track of your performance by uploading your trades. Uploading your trades will allow for comprehensive
        reporting and detailed reviews of your performance.
        Currently, we support the following:
      </p>
      <ul>
        <li>MT4 Statements</li>
        <li>.csv reports generated by CMC Markets</li>
      </ul>
      <p>If you don&apos;t see a platform or method supported that applies to your trading situation, please <Link href={'/report'} className={styles[`${baseClass}__report-issue`]}>Report it as an issue</Link></p>
      <br/>
      <FileInput val={file} handler={handleChange} displayValue={file?.name ?? 'Choose a file...'}/>
      <br/>
      <BaseMessage
        title={'Duplicate Trades'}
        text={'Don\'t worry about duplicate trades. The system will automatically handle those. Previous Trade information will be overwritten should there have been any changes.'}
        type={"info"}
      />
    </section>

  return (
    <BaseModal
      isLoading={isLoading}
      active={active}
      title={'Import Trades'}
      closeHandler={closeModal}
      content={[content]}
      hasControls={true}
      submitHandler={handleSubmit}
      icon={<FaFileImport />}
    />
  )
}

export default TradeImportModal;