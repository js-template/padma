import { useIntl } from 'react-intl';
import { getTranslation } from '../utils/getTranslation';
import { Main, Card, CardBody, CardContent, CardSubtitle, CardTitle } from '@strapi/design-system';
import { Layouts } from '@strapi/strapi/admin';

const HomePage = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <Layouts.Header title={`Welcome to ${formatMessage({ id: getTranslation('') })}`} />
      <Layouts.Content>
        <Main>
          <Card
            style={{
              width: '100%',
            }}
            id="welcome-card"
          >
            <CardBody>
              <CardContent paddingLeft={2}>
                <CardTitle
                  style={{
                    fontSize: '28px',
                    marginBottom: '10px',
                  }}
                >
                  {formatMessage({ id: getTranslation('') })}
                </CardTitle>
                <CardSubtitle>
                  This is your first plugin! You can find me in <code>./plugins/test-plugin</code>.
                </CardSubtitle>
              </CardContent>
            </CardBody>
          </Card>
        </Main>
      </Layouts.Content>
    </>
  );
};

export { HomePage };
