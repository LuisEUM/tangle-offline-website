export default function ButtonApps ({ type }) {
  if (type === 'apple') {
    return (
      <button className='bg-tangle-oxford-blue flex px-14 py-3 rounded-lg'>
        <div className='flex self-center'>
          <svg width='30' height='34' viewBox='0 0 30 34' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M22.375 0.666748C20.4533 0.778415 18.2472 1.84899 16.9355 3.21232C15.7505 4.45232 14.8156 6.29394 15.1973 8.0756C17.2856 8.1306 19.3817 7.03229 20.6367 5.64396C21.8084 4.34563 22.6967 2.53341 22.375 0.666748ZM22.4889 8.07235C19.4739 8.07235 18.2133 9.92456 16.125 9.92456C13.9767 9.92456 12.0128 8.18953 9.41276 8.18953C5.87609 8.1912 0.5 11.4673 0.5 19.1856C0.5 26.2073 6.86276 34.0001 10.4544 34.0001C12.6361 34.0217 13.165 32.6284 16.125 32.6134C19.0883 32.5917 19.7278 34.0184 21.9128 34.0001C24.3728 33.9817 26.2939 31.2785 27.6973 29.1368C28.7039 27.6035 29.1178 26.8207 29.8978 25.0873C24.1095 23.6207 22.9578 14.2862 29.8978 12.3562C28.5878 10.1212 24.7639 8.07235 22.4889 8.07235Z' fill='#FFFCFA' />
          </svg>
        </div>
        <a target='_self' href='#' rel='noopener noreferrer' className='justify-self-center self-center place-content-center pl-4 '>
          comming soon
        </a>
      </button>
    )
  } else {
    return (
      <button className='bg-tangle-oxford-blue flex px-14 py-3 rounded-lg self-start'>
        <div className='flex self-center'>
          <svg width='31' height='33' viewBox='0 0 31 33' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M4.52669 0.880127L17.6615 14.5585L21.5449 10.5155C14.8533 6.73054 6.00336 1.72346 4.52669 0.880127ZM0.734375 1.74601C0.592708 2.07601 0.5 2.4381 0.5 2.83976V31.3196C0.5 31.6479 0.573958 31.951 0.682292 32.2343L15.3503 16.9641L0.734375 1.74601ZM24.5397 12.2115L19.9727 16.9641L24.5039 21.6842C27.2856 20.1092 29.2109 19.0181 29.2109 19.0181C30.0426 18.5131 30.5084 17.7359 30.4967 16.8892C30.4851 16.0642 30.0043 15.3031 29.2077 14.8515C29.0993 14.7898 27.2197 13.7265 24.5397 12.2115ZM17.6615 19.373L4.62435 32.9439C6.86935 31.6673 15.1624 26.9702 21.5091 23.3769L17.6615 19.373Z' fill='#FFFCFA' />
          </svg>
        </div>

        <a target='_self' href='#' rel='noopener noreferrer' className='justify-self-center self-center place-content-center pl-4 '>
          comming soon
        </a>
      </button>
    )
  }
};
