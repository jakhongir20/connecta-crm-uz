import JoditEditor from 'jodit-react';
import { useCallback, useEffect, useMemo, useState } from 'react';

function Notes() {
  const [content, setContent] = useState('');
  const [logs, setLogs] = useState([]);
  const appendLog = useCallback(
    (message) => {
      console.log('logs = ', logs);
      const newLogs = [...logs, message];
      setLogs(newLogs);
    },
    [logs, setLogs],
  );

  const config = useMemo(
    () => ({
      readonly: false,
    }),
    [],
  );

  const onChange = useCallback(
    (newContent) => {
      appendLog(`onChange triggered with ${newContent}`);
    },
    [appendLog],
  );

  useEffect(() => {
    console.log('onChange = ', onChange);
  }, [onChange]);

  const onBlur = useCallback(
    (newContent) => {
      appendLog(`onBlur triggered with ${newContent}`);
      setContent(newContent);
    },
    [appendLog, setContent],
  );

  return (
    <div>
      <JoditEditor
        value={content}
        config={config}
        tabIndex={1}
        statusBar={false}
        onBlur={onBlur}
        onChange={onChange}
      />
    </div>
  );
}
export default Notes;
